import requests, sys, json, redis
from slugify import slugify
import xml.etree.ElementTree as ET

redis_client = redis.Redis(host='127.0.0.1', port=6379)

def get_gallery_data():
    if len(sys.argv) != 3:
        print("Usage: python script_name.py <username> <password>.  Username is NOT the email address; usually just the email address without the '@domain.com'")
        return

    username = sys.argv[1]
    password = sys.argv[2]
    
    
    # Authenticate with the API.
    
    url = "https://collections.newberry.org/API/Authentication/v2.0/Login"
    
    data = {
        "Login": username,
        "Password": password 
    }
    response = requests.post(url, data=data)
    data = response.text
    
    # Parse the XML response.
    root = ET.fromstring(data)

    
    # Check if the authentication was successful.
    # print(root[1][1][0].text)
    if root[1][1][0].text != "SUCCESS":
        raise Exception("Authentication failed.")
    
    # Get the token.
    
    token = root[1][1][1].text
    
    # Get the initial data; this is the top level, all galleries, ie, all folders in the "galleries" folder.

    url = "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=2KXJ8ZSA9MFDO&ContentFields=MediaEncryptedIdentifier&format=json&token=" + token
    response = requests.get(url)
    data = json.loads(response.text)
    
    # Create a list of dictionaries to store the gallery data.
    gallery_data = []
    
    url_for_data = ["https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=","&PackageFields=SystemIdentifier,MediaEncryptedIdentifier,Title,new.Context&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json&token=" + token]

    # a dctionary of slugs associated with their MediaEncryptedIdentifier values, to pull the postcards from redis via slug
    slugs = {}

    # Iterate over the content array.

    for item in data["APIResponse"]["Content"]:
        # sample id : 2KXJ8ZSAKDQ5P
        # sample data url : https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=2KXJ8ZSAKDQ5P&PackageFields=SystemIdentifier,MediaEncryptedIdentifier,Title,new.Context&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json
        id = item["MediaEncryptedIdentifier"]
        print(id)
        
        # Get the data for each gallery; ie, "christmas" or "womens rights"
        url = url_for_data[0] + id + url_for_data[1] 
        print(url)
        response = requests.get(url)
        additional_data = json.loads(response.text)
    
        # dictionary to store the gallery data.
        item_data = {
            "title": additional_data["APIResponse"]["Title"],
            "image": additional_data["APIResponse"]["Representative"]["MediaEncryptedIdentifier"],
            "imageTitle": additional_data["APIResponse"]["Representative"]["Title"],
            "width": additional_data["APIResponse"]["Representative"]["MaxWidth"],
            "height": additional_data["APIResponse"]["Representative"]["MaxHeight"],
            "link": additional_data["APIResponse"]["MediaEncryptedIdentifier"],
            "context": additional_data["APIResponse"]["new.Context"]
        }
    
        slug = slugify(item_data["title"])
        slugs[slug] = id

        # Append the item data to the gallery data list.
        gallery_data.append(item_data)
    
        postcards = []
        # print("----------------------------------------------------------item")
        # print(item)
        # print("----------------------------------------------------------item")
        for postcard_compound_object in additional_data["APIResponse"]["Content"]:
            print('==========================================postcard iterator')
            print(postcard_compound_object)
            # sample id: 2KXJ8ZS6YZ6AM
            # sample data url : https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=2KXJ8ZS6YZ6AM&PackageFields=SystemIdentifier,MediaEncryptedIdentifier,Title,new.Context&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json
            postcard_url = url_for_data[0] + postcard_compound_object["MediaEncryptedIdentifier"] + url_for_data[1]

            print('==========================================url ')
            print(postcard_url)
            # Get data for each postcard in the gallery - but postcards are compound objects too, so we have to ask for the postcard CO and use its "represetative image" values, which we will display
            postcard_response = requests.get(postcard_url)
            postcard_raw_data = json.loads(response.text)

            postcard_data = {
                "title": postcard_raw_data["APIResponse"]["Title"],
                "link": postcard_raw_data["APIResponse"]["MediaEncryptedIdentifier"],
                "sysid": postcard_raw_data["APIResponse"]["SystemIdentifier"],
                "image": postcard_raw_data["APIResponse"]["Representative"]["MediaEncryptedIdentifier"],
                "height": postcard_raw_data["APIResponse"]["Representative"]["MaxHeight"],
                "width": postcard_raw_data["APIResponse"]["Representative"]["MaxWidth"]
            }
            print('==========================================postcard link, image')
            print(postcard_data["link"])
            print(postcard_data["image"])
    #         postcards.append(postcard_data)
    #
    #     # each gallery gets dumped into redis
    #     # redis_client.set(slug, json.dumps(postcards))
    #
    #     # lets save it as json too
    #     gal_filename = 'gallery_' + slug + '.json'
    #     with open(gal_filename, "w") as outfile:
    #         json.dump(postcards, outfile, indent=4)
    #
    # # Save the gallery data to a JSON file.
    # with open("gallery_data.json", "w") as outfile:
    #     json.dump(gallery_data, outfile, indent=4)
    # # redis_client.set('maingallerydata', json.dumps(gallery_data))
    # # Save the slugs to a JSON file.
    # with open("slugs.json", "w") as outfile:
    #     json.dump(slugs, outfile, indent=4)

if __name__ == "__main__":
    get_gallery_data()
