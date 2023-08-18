import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import BiggerPicture from "bigger-picture/vanilla";
import "bigger-picture/css";
import styles from "./bigger-picture.css?inline";
import type APIData from "~/types.d.ts";
export interface BiggerPictureProps {
  data: APIData.Postcard[];
  holiday?: boolean;
}
import { getWidth } from "~/routes/[cat]";

export const BiggerPictureComponent = component$<BiggerPictureProps>(
  (props) => {
    const { data } = props;
    useStylesScoped$(styles);
    useVisibleTask$(() => {
      const bp = BiggerPicture({
        target: document.body,
      });
      const imageLinks: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll("#images > a");
      console.log("imageLinks", imageLinks);
      console.log(
        "idocument.querySelectorAll(#images > a",
        document.querySelectorAll("#images > a"),
      );
      for (const link of imageLinks) {
        link.addEventListener("click", openGallery);
      }

      function openGallery(e: MouseEvent) {
        console.log(e.currentTarget);
        e.preventDefault();
        if (e.currentTarget !== null) {
          bp.open({
            intro: "fadeup",
            items: imageLinks,
            el: e.currentTarget,
          });
        }
      }
    });
    return (
      <div class="horiz" id="images">
        {data.map((item: APIData.Postcard) => {
          return (
            <a
              href={`https://collections.newberry.org/IIIF3/Image/${item.image}/full/max/0/default.jpg`}
              key={item.image}
              data-img={`https://collections.newberry.org/IIIF3/Image/${
                item.image
              }/full/,${Math.min(
                parseInt(item.height),
                600,
              )}/0/default.jpg 600w, https://collections.newberry.org/IIIF3/Image/${
                item.image
              }/full/,${Math.min(
                parseInt(item.height),
                1000,
              )}/0/default.jpg 1000w, https://collections.newberry.org/IIIF3/Image/${
                item.image
              }/full/max/0/default.jpg 2500w`}
              data-thumb={`https://collections.newberry.org/IIIF3/Image/${item.image}/full/max/0/default.jpg`}
              data-width={item.width}
              data-height={item.height}
              data-caption={`${item.title} | View at <a href="https://collections.newberry.org/asset-management/${item.image}" target="_blank">Newberry Digital Collections</a>`}
            >
              <img
                src={`https://collections.newberry.org/IIIF3/Image/${item.image}/full/,300/0/default.jpg`}
                alt={item.imageTitle}
                width={getWidth(parseInt(item.width), parseInt(item.height))}
                height="300"
              />
            </a>
          );
        })}
      </div>
    );
  },
);
// const Gallery = component$<Props>(({ items, holiday = false }) => {
//   useStylesScoped$(styles);
//   const tiles = items.map((item) => {
//     return (
//
//       <a
//         href={item.title}
//         class={holiday ? "tile htile" : "tile nhtile"}
//         key={item.image}
//       >
//         <img
//           height="300"
//           width={getWidth(item.width, item.height)}
//           src={`https://collections.newberry.org/IIIF3/Image/${item.image}/full/,300/0/default.jpg`}
//           alt={`a ${item.title} postcard`}
//         />
//       </a>
//     );
//   });
//   return <>{tiles}</>;
// });
