import * as server from '../entries/pages/_cat_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_cat_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[cat]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.a64b6489.js","_app/immutable/chunks/scheduler.126f6a18.js","_app/immutable/chunks/index.912b15c0.js","_app/immutable/chunks/stores.347bef2e.js","_app/immutable/chunks/index.d86d53fc.js"];
export const stylesheets = ["_app/immutable/assets/3.be8f0d6f.css"];
export const fonts = [];
