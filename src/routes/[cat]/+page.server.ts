const packageExtractor = [
  "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
  "&PackageFields=Corefield.Purpose,SystemIdentifier,Title,MediaEncryptedIdentifier&RepresentativeFields=Corefield.Purpose,SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType,Purpose&format=json",
];
const slugs = {
  "womens-rights": "2KXJ8ZSA9MW04",
  "reading-and-writing": "2KXJ8ZSAKD0AX",
  bicycling: "2KXJ8ZSAKD58D",
  chicago: "2KXJ8ZSAKD6V9",
  "stories-oilettes": "2KXJ8ZSAKDAG7",
  alcohol: "2KXJ8ZSAKDB98",
  dogs: "2KXJ8ZSAKDC09",
  cats: "2KXJ8ZSAKDD11",
  thanksgiving: "2KXJ8ZSAKDE3I",
  "santa-claus": "2KXJ8ZSAKDHEB",
  "valentines-day": "2KXJ8ZSAKDJCR",
  easter: "2KXJ8ZSAKDKDK",
  "back-to-school": "2KXJ8ZSAKDMYB",
  newberry: "2KXJ8ZSAKDPK2",
  christmas: "2KXJ8ZSAKDQ5P",
  "coffee-tea": "2KXJ8ZSAKDRBQ",
  halloween: "2KXJ8ZSAKDX4O",
};
const deslugify = (slug) => {
  return slugs[slug];
};
// const starter = '2KXJ8ZSAKD6V9';
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  console.log("cat", params.cat);
  console.log(" deslugify(params.cat)", deslugify(params.cat));
  const url = packageExtractor[0] + deslugify(params.cat) + packageExtractor[1];
  const res = await fetch(url);
  const rawTopLevelData = await res.json();
  console.log(url);
  console.log("rawTopLevelData", JSON.stringify(rawTopLevelData, null, 4));
  let rawConstituentData = await Promise.all(
    rawTopLevelData.APIResponse.Content.map(async (i) =>
      datagaerrter(
        packageExtractor[0] + i.MediaEncryptedIdentifier + packageExtractor[1]
      )
    )
  );

  const processedData = {
    title: rawTopLevelData.APIResponse.Title,
    image: rawTopLevelData.APIResponse.Representative?.MediaEncryptedIdentifier,
    imageTitle: rawTopLevelData.APIResponse.Representative?.Title,
    width: rawTopLevelData.APIResponse.Representative?.MaxWidth,
    height: rawTopLevelData.APIResponse.Representative?.MaxHeight,
    items: rawConstituentData
      .filter(
        (f) =>
          "APIResponse" in f &&
          "Title" in f.APIResponse &&
          "Representative" in f.APIResponse &&
          "MediaEncryptedIdentifier" in f.APIResponse.Representative
      )
      .map((item) => ({
        title: item.APIResponse.Title,
        image: item.APIResponse.Representative.MediaEncryptedIdentifier,
        imageTitle: item.APIResponse.Representative.Title,
        width: item.APIResponse.Representative.MaxWidth,
        height: item.APIResponse.Representative.MaxHeight,
      })),
  };
  return { processedData, packageExtractor };
}

async function datagaerrter(url: String) {
  // console.log('iterator api url: ', url);
  let itemdata = await fetch(url);
  let retreData = await itemdata.json();
  return await retreData;
}
