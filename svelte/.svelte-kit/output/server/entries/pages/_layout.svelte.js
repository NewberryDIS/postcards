import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { t as title } from "../../chunks/stores.js";
const openProps_min = "";
const normalize_min = "";
const biggerPicture = "";
const main = "";
const header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-aqmkzx{display:flex;justify-content:space-between;align-items:center;padding-inline:16px;position:fixed;top:0;left:0;right:0;height:50px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $title, $$unsubscribe_title;
  $$unsubscribe_title = subscribe(title, (value) => $title = value);
  $$result.css.add(css$1);
  $$unsubscribe_title();
  return `<header class="svelte-aqmkzx"><div class="left" data-svelte-h="svelte-i3w65x">NU.BERRY</div> <div class="mid" data-svelte-h="svelte-1376yit">nuffin</div> <div class="right">${escape($title)}</div> </header>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".top-level-wrapper.svelte-jriwe7{margin-block:10vh}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="top-level-wrapper svelte-jriwe7">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
