

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7566f059.js","_app/immutable/chunks/scheduler.126f6a18.js","_app/immutable/chunks/index.912b15c0.js","_app/immutable/chunks/paths.d18bb223.js"];
export const stylesheets = [];
export const fonts = [];
