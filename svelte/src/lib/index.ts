// place files you want to import through the `$lib` alias in this folder.
/** @type {import('resize-observer-browser').ResizeObserver} */
let ro: ResizeObserver | null;

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
			ro?.unobserve(node);
		}
	};
}
