

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c559fd14.js","_app/immutable/chunks/scheduler.126f6a18.js","_app/immutable/chunks/index.912b15c0.js","_app/immutable/chunks/singletons.55fa72f3.js","_app/immutable/chunks/index.d86d53fc.js","_app/immutable/chunks/paths.d18bb223.js"];
export const stylesheets = [];
export const fonts = [];
