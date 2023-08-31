import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";
import type APIData from "~/types.d.ts";
import mainGalleries from "./mainGalleries";

export function slugify(string: String) {
  return string
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getWidth(w: number, h: number) {
  // w:h::x:300
  return (w * 300) / h;
}

const holidays = [
  "Valentine's Day",
  "Easter",
  "Back to School",
  "Halloween",
  "Thanksgiving",
  "Christmas",
];

const hGalleries = mainGalleries.filter((f) => holidays.includes(f.title));
const nhGalleries = mainGalleries.filter((f) => !holidays.includes(f.title));
function imgElementer(data: APIData.Postcard[]) {
  return data.map((item) => (
    <a
      href={`/${slugify(item.title)}`}
      class={`tile ${holidays.includes(item.title) ? "htile" : "nhtile"}`}
      key={item.image}
    >
      <img
        width={getWidth(parseInt(item.width), parseInt(item.height))}
        height="300"
        src={`https://collections.newberry.org/IIIF3/Image/${item.image}/full/,300/0/default.jpg`}
        alt={`a ${item.title} postcard`}
      />
      <h3>{item.title}</h3>
    </a>
  ));
}
export default component$(() => {
  useStylesScoped$(styles);
  // console.log(pageData.value);
  return (
    <>
      <main>
        <div class="left">
          <div class="title">
            <h1 class="">Newberry</h1>
            <h1 class="">Postcard</h1>
            <h1 class="">Gallery</h1>
          </div>
          <div class="text-content">
            <p class="text-lg">
              The vintage postcard images featured here are free to use and
              reuse. The Newberry believes that this content is in the public
              domain, and makes these digitized copies available without
              requiring fees or permissions. For more information, see our{" "}
              <a
                href="https://www.newberry.org/policies#open-access"
                target="_blank"
                class="llines"
              >
                Open Access Policy
              </a>
              .
            </p>
            <p class="text-base">
              The Newberry houses one of the largest public collections of
              postcards and related materials in the United States. Learn more
              at our{" "}
              <a
                href="https://www.newberry.org/collection/subjects/postcards"
                target="_blank"
                class="llines"
              >
                Postcards information page
              </a>
              , browse more than{" "}
              <a
                href="https://collections.newberry.org/asset-management?WS=SearchResults#/DamView&VBID=2KXJA4UET6ZH&PN=1&WS=SearchResults"
                target="_blank"
                class="llines"
              >
                50,000 digitized postcards
              </a>{" "}
              at Newberry Digital Collections, or explore the themed sets below.
            </p>
            <p class="text-sm">
              With gratitude to the Library of Congress for its{" "}
              <a
                href="https://www.loc.gov/free-to-use/"
                target="_blank"
                class="llines"
              >
                Free to Use and Reuse Sets
              </a>
              , from which this site is inspired.
            </p>
          </div>
        </div>
        <div class="right">
          <div class="horiz">
            {imgElementer(nhGalleries)}
            <a
              class="tile nhtile empty-tile"
              target="_blank"
              href="https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1"
            >
              <h3>View even more postcards at Newberry Digital Collections</h3>
            </a>
          </div>
          <div class="horiz">
            <a href="#" class="htile tile notile" tabIndex={-1}>
              <img
                src="./madonna-holiday.gif"
                width={getWidth(498, 373)}
                height="300"
                alt="Madonna Ciccone dancing in a music video from the 1980s"
              />
            </a>
            {imgElementer(hGalleries)}
          </div>
        </div>
        {/* <div class="right vert">{imgElements}</div> */}
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Newberry Postcard Gallery",
  meta: [
    {
      name: "description",
      content: "Curated galleries from the Newberry collection of postcards",
    },
  ],
};
