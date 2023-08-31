export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "postcards/_app",
	assets: new Set(["favicon.png","fonts/FlechaM-Regular.woff","fonts/StyreneB-Bold-Web.woff","fonts/StyreneB-Regular-Web.woff","fonts/signifier-bold.woff2","fonts/signifier-regular.woff2"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.52fbb044.js","app":"_app/immutable/entry/app.82bf20a2.js","imports":["_app/immutable/entry/start.52fbb044.js","_app/immutable/chunks/scheduler.126f6a18.js","_app/immutable/chunks/singletons.55fa72f3.js","_app/immutable/chunks/index.d86d53fc.js","_app/immutable/chunks/paths.d18bb223.js","_app/immutable/entry/app.82bf20a2.js","_app/immutable/chunks/scheduler.126f6a18.js","_app/immutable/chunks/index.912b15c0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[cat]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"cat","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
