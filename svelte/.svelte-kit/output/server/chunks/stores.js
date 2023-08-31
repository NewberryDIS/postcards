import { d as derived, w as writable } from "./index.js";
const titleString = writable("Newberry Postcard Collection");
const title = derived(titleString, ($titleString) => {
  let strArray = $titleString.toLowerCase().split(" ");
  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }
  return strArray.join(" ");
});
function imgUrl(img, size) {
  console.log("img", img);
  if (size) {
    return `https://collections.newberry.org/IIIF3/Image/${img}/full/${size},/0/default.jpg`;
  } else if (size === -1) {
    return `https://collections.newberry.org/IIIF3/Image/${img}/full/1000,/0/default.jpg 1300w, https://collections.newberry.org/IIIF3/Image/${img}/full/2500,/0/default.jpg 2500w, https://collections.newberry.org/IIIF3/Image/${img}/full/max/0/default.jpg 6000w`;
  } else {
    return `https://collections.newberry.org/IIIF3/Image/${img}/full/max/0/default.jpg`;
  }
}
export {
  titleString as a,
  imgUrl as i,
  title as t
};
