import { derived, writable } from 'svelte/store';

export const titleString = writable('Newberry Postcard Collection');

export const title = derived(titleString, ($titleString) => {
	let strArray = $titleString.toLowerCase().split(' ');
	for (var i = 0; i < strArray.length; i++) {
		strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
	}
	return strArray.join(' ');
});

export function imgUrl(img: String, size: Number) {
	// console.log('img', img);
	if (size) {
		return `https://collections.newberry.org/IIIF3/Image/${img}/full/${size},/0/default.jpg`;
	} else if (size === -1) {
		return `https://collections.newberry.org/IIIF3/Image/${img}/full/1000,/0/default.jpg 1300w, https://collections.newberry.org/IIIF3/Image/${img}/full/2500,/0/default.jpg 2500w, https://collections.newberry.org/IIIF3/Image/${img}/full/max/0/default.jpg 6000w`;
	} else {
		return `https://collections.newberry.org/IIIF3/Image/${img}/full/max/0/default.jpg`;
	}
}

let ro: ResizeObserver;

export function resize(node: Element) {
	if (!ro) {
		ro = new ResizeObserver((entries) => {
			for (const entry of entries) {
				entry.target.dispatchEvent(
					new CustomEvent('bp:resize', {
						detail: {
							cr: entry.contentRect
						}
					})
				);
			}
		});
	}
	ro.observe(node);
	return {
		destroy() {
			ro.unobserve(node);
		}
	};
}
export const bpItem = writable({});
