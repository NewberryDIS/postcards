// place files you want to import through the `$lib` alias in this folder.
export function slugify(string) {
	return string
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}
