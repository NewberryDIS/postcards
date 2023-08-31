import requests, sys, json, redis
import xml.etree.ElementTree as ET

redis_client = redis.Redis(host='127.0.0.1', port=6379)

gallery_ids:
"2KXJ8ZSA9MW04",
"2KXJ8ZSAKD0AX",
"2KXJ8ZSAKD58D",
"2KXJ8ZSAKD6V9",
"2KXJ8ZSAKDAG7",
"2KXJ8ZSAKDB98",
"2KXJ8ZSAKDC09",
"2KXJ8ZSAKDD11",
"2KXJ8ZSAKDE3I",
"2KXJ8ZSAKDHEB",
"2KXJ8ZSAKDJCR",
"2KXJ8ZSAKDKDK",
"2KXJ8ZSAKDMYB",
"2KXJ8ZSAKDPK2",
"2KXJ8ZSAKDQ5P",
"2KXJ8ZSAKDRBQ",
"2KXJ8ZSAKDX4O",

def get_gallery_data():
    if len(sys.argv) !== 3:
        
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

