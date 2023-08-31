import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { slugify } from "..";
import styles from "./index.css?inline";
import type APIData from "~/types.d.ts";
import { BiggerPictureComponent } from "~/components/bigger-picture/bigger-picture";
// export const pageData = server$(async function () {
export const useGetPageData = routeLoader$(async (requestEvent) => {
  // const loc = useLocation();

  const packageExtractor = [
    "https://collections.newberry.org/API/PackageExtractor/v1.0/Extract?Package=",
    "&PackageFields=Corefield.Purpose,SystemIdentifier,Title,MediaEncryptedIdentifier,new.Context&RepresentativeFields=Corefield.Purpose,SystemIdentifier,MediaEncryptedIdentifier,Title,MaxWidth,MaxHeight&ContentFields=SystemIdentifier,MediaEncryptedIdentifier,Title,CoreField.IIIFResourceType,Purpose&format=json",
  ];

  const slugs: { [key: string]: string } = {
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

  // const starter = '2KXJ8ZSAKD6V9';

  const packageMEI = slugs[requestEvent.params.cat];

  // Make the first API call and get the response.
  const response = await fetch(
    packageExtractor[0] + packageMEI + packageExtractor[1],
  );

  // Iterate over the data in the response.
  const data = await response.json();
  const results = [];
  const postCardGallery: APIData.Gallery = {
    pageMEI: data.APIResponse.MediaEncryptedIdentifier,
    pageTitle: data.APIResponse["new.Context"],
    pageSlug: slugify(data.APIResponse.Title),
    postcards: [],
  };
  for (const item of data.APIResponse.Content) {
    // Make a new API call using the value of the MediaEncryptedIdentifier property.
    const newResponse = await fetch(
      packageExtractor[0] + item.MediaEncryptedIdentifier + packageExtractor[1],
    );
    // console.log(
    //   packageExtractor[0] + item.MediaEncryptedIdentifier + packageExtractor[1],
    // );
    // Add the response from the new API call to an array.
    results.push((await newResponse.json()) as APIData.CortexAPIData);
  }
  // Return the array.
  const postcardData: APIData.Postcard[] = results.map((response) => {
    return {
      title: response.APIResponse.Title,
      link: response.APIResponse.MediaEncryptedIdentifier,
      context: response.APIResponse["new.Context"],
      image: response.APIResponse.Representative.MediaEncryptedIdentifier,
      imageTitle: response.APIResponse.Representative.Title,
      width: response.APIResponse.Representative.MaxWidth,
      height: response.APIResponse.Representative.MaxHeight,
    };
  });
  postCardGallery.postcards = postcardData;
  return postCardGallery;
});

export function getWidth(w: number, h: number) {
  // w:h::x:300
  return (w * 300) / h;
}

export default component$(() => {
  useStylesScoped$(styles);
  const pageData = useGetPageData();
  // console.log(pageData.value);
  return (
    <>
      <main>
        <div class="left">
          <div class="title">
            <h3>Free to Use and Reuse:</h3>
            {pageData.value.pageTitle
              .split(" ")
              .map((t: string, idx: number) => (
                <h1 class="" key={`title-${idx}`}>
                  {t}
                </h1>
              ))}
          </div>
          <div class="text-content">
            <p class="text-lg">
              Featured below are some staff favorites from the Newberry’s
              collection. View more free to use and reuse images at our{" "}
              <a
                href="https://collections.newberry.org/CS.aspx?VP3=DamView&VBID=2KXJA4UE6RXM&PN=1"
                target="_blank"
                class="llines"
              >
                Postcard Gallery
              </a>
              .
            </p>
            <p class="text-base">
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
          </div>
        </div>
        <div class="right">
          <BiggerPictureComponent data={pageData.value.postcards} />
        </div>{" "}
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
