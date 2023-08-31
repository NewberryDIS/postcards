<script>
    const rawdata = {
  "APIRequestInfo": {
    "ProviderVersion": "CONCORD.R3.1878K.209130",
    "ProviderIdentity": "NBL-USE2-P-APP",
    "ProviderID": "85dca31b7899f944ad0236f5f856af0c",
    "Module": "PackageExtractor",
    "APIVersion": "v1.0",
    "Resource": "Extract",
    "IsLoggedIn": true,
    "Parameters": {
      "Package": "2KXJ8ZSA9MFDO",
      "PackageFields": "Corefield.Purpose,SystemIdentifier,Title,MediaEncryptedIdentifier",
      "RepresentativeFields": "Corefield.Purpose,SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight",
      "ContentFields": "SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType,Purpose"
    },
    "Status": "LoggedIn",
    "UserLogin": "whiten@newberry.org",
    "Session": "No session (production configuration)",
    "TimeoutPeriodMinutes": 120
  },
  "APIResponse": {
    "Corefield.Purpose": "Public",
    "SystemIdentifier": "NL11L0NX",
    "Title": "Galleries",
    "MediaEncryptedIdentifier": "2KXJ8ZSA9MFDO",
    "Representative": {
      "Corefield.Purpose": "",
      "SystemIdentifier": "NL13E29",
      "MediaEncryptedIdentifier": "2KXJ8Z8KLJWR",
      "Title": "Bryan L. Bossier postcard collection, 1880s-1920s [000034_01]",
      "MaxWidth": "2801",
      "MaxHeight": "4169"
    },
    "Content": [
      {
        "SystemIdentifier": "NL11L2EB",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDQ5P",
        "Title": "Christmas",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2E9",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKD58D",
        "Title": "Bicycling",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2E5",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKD6V9",
        "Title": "Chicago",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2DZ",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDE3I",
        "Title": "Thanksgiving",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2DX",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDX4O",
        "Title": "Halloween",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2DQ",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDC09",
        "Title": "Dogs",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2DO",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDB98",
        "Title": "Alcohol",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2DM",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKD0AX",
        "Title": "Reading and Writing",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2DK",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDPK2",
        "Title": "Newberry",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2DI",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDKDK",
        "Title": "Easter",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2DG",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDHEB",
        "Title": "Santa Claus",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2DD",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDJCR",
        "Title": "Valentine's Day",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2DB",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDMYB",
        "Title": "Back to School",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2D9",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDD11",
        "Title": "Cats",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2D7",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDRBQ",
        "Title": "Coffee & Tea",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L2CX",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDAG7",
        "Title": "Stories: Oilettes",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      },
      {
        "SystemIdentifier": "NL11L0O4",
        "MediaEncryptedIdentifier": "2KXJ8ZSA9MW04",
        "Title": "Women's Rights",
        "CoreField.IIIFResourceType": "Manifest",
        "Purpose": ""
      }
    ],
    "useremail": "whiten@newberry.org"
  }
}
    const prcessedData = rawdata.APIResponse.Content.map(r =>( {
        title: r.Title,
        id: r.SystemIdentifier,
        mei: r.MediaEncryptedIdentifier
    }))
    import galleryData from '../allGalleries.json'
    const mergedData = galleryData.map(g => {
        let newData = prcessedData.filter(f=> f.title  === g.title).pop()
         g.link = newData.mei
            return g
    })
    console.log(mergedData)
</script>
