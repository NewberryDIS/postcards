import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-rm4a2n">Welcome to the Postcards</h1> <p data-svelte-h="svelte-1ipxrmm">Visit <a href="${escape(base, true) + "/2KXJ8ZSAKD6V9"}">this link</a> for a demo</p>`;
});
export {
  Page as default
};
