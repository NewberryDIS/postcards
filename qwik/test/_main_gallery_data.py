import requests, sys, json, redis
import xml.etree.ElementTree as ET

redis_client = redis.Redis(host='127.0.0.1', port=6379)

def get_gallery_data():
  if len(sys.argv) != 3:
    print("Usage: python script_name.py <username> <password>.  Username is NOT the email address; usually just the email address without the '@domain.com'")
    return

  username = sys.argv[1]
  password = sys.argv[2]
  
  """Gets gallery data from the Newberry Library API."""

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
  print(root[1][1][0].text)
  # Check if the authentication was successful.
  if root[1][1][0].text != "SUCCESS":
    raise Exception("Authentication failed.")

  # Get the token.
  token = root[1][1][1].text

  # Get the initial data.
  url = "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=2KXJ8ZSA9MFDO&ContentFields=MediaEncryptedIdentifier&format=json&token=" + token
  response = requests.get(url)
  data = json.loads(response.text)

  # Create a list of dictionaries to store the gallery data.
  gallery_data = []

  # Iterate over the content array.
  for item in data["APIResponse"]["Content"]:
    id = item["MediaEncryptedIdentifier"]
    print(id)
    # Get the additional data for the item.
    url = "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=" + id + "&PackageFields=SystemIdentifier,MediaEncryptedIdentifier,Title,new.Context&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json&token=" + token
    print(url)
    response = requests.get(url, headers={"Authorization": "Bearer " + token})
    additional_data = json.loads(response.text)

    # Create a dictionary to store the item data.
    item_data = {
        "title": additional_data["APIResponse"]["Title"],
        "image": additional_data["APIResponse"]["Representative"]["MediaEncryptedIdentifier"],
        "imageTitle": additional_data["APIResponse"]["Representative"]["Title"],
        "width": additional_data["APIResponse"]["Representative"]["MaxWidth"],
        "height": additional_data["APIResponse"]["Representative"]["MaxHeight"],
        "link": additional_data["APIResponse"]["MediaEncryptedIdentifier"],
            "context": additional_data["APIResponse"]["new.Context"]

    }
                                                   
    # Append the item data to the gallery data list.
    gallery_data.append(item_data)
    # redis_client.set([item_data["link"]], json.dumps(individ_gallery_data))
  
  
  
  
  # Save the gallery data to a JSON file.
  with open("gallery_data.json", "w") as outfile:
    json.dump(gallery_data, outfile, indent=4)
  redis_client.set('maingallerydata', json.dumps(gallery_data))

if __name__ == "__main__":
  get_gallery_data()
