<script>
    import {base} from '$app/paths'
    const dootoo = [
      {
        "SystemIdentifier": "NL11L2EB",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDQ5P",
        "Title": "Christmas",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2E9",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKD58D",
        "Title": "Bicycling",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2E5",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKD6V9",
        "Title": "Chicago",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2DZ",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDE3I",
        "Title": "Thanksgiving",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2DX",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDX4O",
        "Title": "Halloween",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2DQ",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDC09",
        "Title": "Dogs",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2DO",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDB98",
        "Title": "Alcohol",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2DM",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKD0AX",
        "Title": "Reading and Writing",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2DK",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDPK2",
        "Title": "Newberry",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2DI",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDKDK",
        "Title": "Easter",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2DG",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDHEB",
        "Title": "Santa Claus",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2DD",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDJCR",
        "Title": "Valentine's Day",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2DB",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDMYB",
        "Title": "Back to School",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2D9",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDD11",
        "Title": "Cats",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2D7",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDRBQ",
        "Title": "Coffee & Tea",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L2CX",
        "MediaEncryptedIdentifier": "2KXJ8ZSAKDAG7",
        "Title": "Stories: Oilettes",
        "CoreField.IIIFResourceType": "Manifest"
      },
      {
        "SystemIdentifier": "NL11L0O4",
        "MediaEncryptedIdentifier": "2KXJ8ZSA9MW04",
        "Title": "Women's Rights",
        "CoreField.IIIFResourceType": "Manifest"
      }
    ]
    const coverpage = dootoo.map(i => i.MediaEncryptedIdentifier)
</script>

<h1>Welcome to the Postcards</h1>
<p>Visit <a href="{base}/2KXJ8ZSAKD6V9">this link</a> for a demo</p>
{#each coverpage as item}

<p><a href="https://collections.newberry.org/asset-management/{item}?WS=AssetManagement">{item}</a></p>
{/each}
