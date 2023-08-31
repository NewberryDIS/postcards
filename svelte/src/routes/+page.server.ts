// const packageExtractor = [
//   "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
//   "&PackageFields=SystemIdentifier,Title,new.Context&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json",
// ];
// // const starter = '2KXJ8ZSAKD6V9';
// const galleryMEI = "2KXJ8ZSA9MFDO";
// /** @type {import('./$types').PageServerLoad} */
// export async function load({ fetch, params }) {
//   const url = packageExtractor[0] + galleryMEI + packageExtractor[1];
//     const wtfurl = 'https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=2KXJ8ZSA9MFDO&PackageFields=SystemIdentifier,Title,new.Context&RepresentativeFields=SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType&format=json'
//   const res = await fetch(wtfurl);
//   const rawTopLevelData = await res.json();
//
//   let rawConstituentData = await Promise.all(
//     rawTopLevelData.APIResponse.Content.map(async (i) =>
//       datagaerrter(
//         packageExtractor[0] + i.MediaEncryptedIdentifier + packageExtractor[1]
//       )
//     )
//   );
//   console.log("rawTopLevelData", rawTopLevelData);
//   const processedData = {
//     title: rawTopLevelData.APIResponse.Title,
//     image: rawTopLevelData.APIResponse.Representative.MediaEncryptedIdentifier,
//     imageTitle: rawTopLevelData.APIResponse.Representative.Title,
//     width: rawTopLevelData.APIResponse.Representative.MaxWidth,
//     height: rawTopLevelData.APIResponse.Representative.MaxHeight,
//     items: rawConstituentData
//       .filter(
//         (f) =>
//           "APIResponse" in f &&
//           "Title" in f.APIResponse &&
//           "Representative" in f.APIResponse &&
//           "MediaEncryptedIdentifier" in f.APIResponse.Representative
//       )
//       .map((item) => ({
//         title: item.APIResponse.Title,
//         image: item.APIResponse.Representative.MediaEncryptedIdentifier,
//         imageTitle: item.APIResponse.Representative.Title,
//         width: item.APIResponse.Representative.MaxWidth,
//         height: item.APIResponse.Representative.MaxHeight,
//       })),
//   };
//   console.log(processedData);
//   return { processedData, packageExtractor };
// }
//
// async function datagaerrter(url: String) {
//   // console.log('iterator api url: ', url);
//   let itemdata = await fetch(url);
//   let retreData = await itemdata.json();
//   return await retreData;
// }
