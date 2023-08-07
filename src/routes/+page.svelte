<script lang="ts">
    import {base} from '$app/paths'
    import galleryData from './allGalleries.json'
    import { MasonryGrid } from "@egjs/svelte-grid";
    import {heroImage, titleString} from '$lib/stores'
    const gap = 10;
    const align = 'center'
    function slugify(title){
        return title.normalize('NFKD') // split accented characters into their base characters and diacritical marks
            .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
            .trim() // trim leading or trailing whitespace
            .toLowerCase() // convert to lowercase
            .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
            .replace(/\s+/g, '-') // replace spaces with hyphens
            .replace(/-+/g, '-'); // remove consecutive hyphens
    }
    // let slugs = galleryData.map(g => ({[slugify(g.title)]: g.link}))
    // console.log(slugs)
    $: $titleString = 'Newberry Postcard Galleries'
    $: $heroImage = ''
</script>
<MasonryGrid {gap} {align} >
    {#each galleryData as gallery}
        <a href="{slugify(gallery.title)}" class="gallery-card">
            <figure >
                <img src="https://collections.newberry.org/IIIF3/Image/{gallery.image}/full/400,/0/default.jpg" alt="">
                <figcaption>{gallery.title}</figcaption>
            </figure>
        </a>
    {/each}

</MasonryGrid>

<style lang="scss">
    .gallery-card{
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        transition: 100ms;
        padding: 0;
        position: relative;
        &:hover {
            box-shadow: var(--shadow-6);
            figcaption {
                filter: drop-shadow(0px 0px 10px rgba(0,0,0,.8));
            }
        }
        img { 
            flex: 1;
        }
        figcaption {
            background: linear-gradient(150deg, rgba(64,81,163,0) 60%, rgba(64,81,163,1) 60%, rgba(64,81,163,1) 100%);
            position: absolute;
            display: flex;

            justify-content: flex-end;
            align-items: flex-end;
            // top: 0;
            height: 200px;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px;
            font-weight: 900;
            font-size: var(--font-size-2);
            text-align: right;
            color: rgb( var(--granite));
        }
    }
    </style>
