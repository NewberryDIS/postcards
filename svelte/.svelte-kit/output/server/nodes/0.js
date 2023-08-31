import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.aca89011.js","_app/immutable/chunks/scheduler.126f6a18.js","_app/immutable/chunks/index.912b15c0.js","_app/immutable/chunks/stores.347bef2e.js","_app/immutable/chunks/index.d86d53fc.js"];
export const stylesheets = ["_app/immutable/assets/0.6a03d840.css"];
export const fonts = [];
