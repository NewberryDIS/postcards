const packageExtractor = [
  "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
  "&PackageFields=SystemIdentifier,Title,new.Context&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json"
];
async function load({ fetch: fetch2, params }) {
  const url = packageExtractor[0] + params.cat + packageExtractor[1];
  const res = await fetch2(url);
  const rawTopLevelData = await res.json();
  let rawConstituentData = await Promise.all(
    rawTopLevelData.APIResponse.Content.map(
      async (i) => datagaerrter(packageExtractor[0] + i.MediaEncryptedIdentifier + packageExtractor[1])
    )
  );
  const processedData = {
    title: rawTopLevelData.APIResponse.Title,
    image: rawTopLevelData.APIResponse.Representative.MediaEncryptedIdentifier,
    imageTitle: rawTopLevelData.APIResponse.Representative.Title,
    width: rawTopLevelData.APIResponse.Representative.MaxWidth,
    height: rawTopLevelData.APIResponse.Representative.MaxHeight,
    items: rawConstituentData.filter(
      (f) => "APIResponse" in f && "Title" in f.APIResponse && "Representative" in f.APIResponse && "MediaEncryptedIdentifier" in f.APIResponse.Representative
    ).map((item) => ({
      title: item.APIResponse.Title,
      image: item.APIResponse.Representative.MediaEncryptedIdentifier,
      imageTitle: item.APIResponse.Representative.Title,
      width: item.APIResponse.Representative.MaxWidth,
      height: item.APIResponse.Representative.MaxHeight
    }))
  };
  return { processedData, rawTopLevelData, rawConstituentData };
}
async function datagaerrter(url) {
  let itemdata = await fetch(url);
  let retreData = await itemdata.json();
  return await retreData;
}
export {
  load
};
