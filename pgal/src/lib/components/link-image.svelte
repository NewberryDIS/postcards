<script>
    import { slugify } from '$lib'
    export let item
const holidays = [
  "Valentine's Day",
  "Easter",
  "Halloween",
  "Thanksgiving",
  "Christmas",
];
</script>
    <a
      href={`/postcard-gallery/${slugify(item.title)}`}
      class={`tile ${holidays.includes(item.title) ? "htile" : "nhtile"}`}
      key={item.image}
    >
      <img
        width={item.width item.height}
        height="300"
        src={`https://collections.newberry.org/IIIF3/Image/${item.image}/full/,300/0/default.jpg`}
        alt={`a ${item.title} postcard`}
      />
      <h3>{item.title}</h3>
    </a>
  ));
}
