<script>
    import { onMount } from 'svelte'
    import { MasonryGrid } from "@egjs/svelte-grid";
    import {imgUrl } from '$lib/stores'
    import Thumbnails from './thumbnails.svelte'
    export let postcards
    const gap = 10
    const align = 'center'
    const defaultDirection = 'end'
let bpThumbnails, imageLinks
    onMount(() => {
        bpThumbnails = new Thumbnails({
            target: document.body
        })
        imageLinks = document.querySelectorAll('#images > a')
        for ( let link of imageLinks ) {
            link.addEventListener("click", openGallery)
        }
    })
    function openGallery(e){
        e.preventDefault()
        bpThumbnails.open({
            el: e.currentTarget,
            items: imageLinks
        })
    }
</script>

<MasonryGrid
    class="images"
    id="images"
    {align}
    {gap}
    {defaultDirection}>
    {#each postcards as item}
        <!-- <figure class="item"> -->
        <a href={imgUrl(item.image)}
            class="item"
            data-img={ imgUrl(item.image) }
            data-thumb={ imgUrl(item.image, 250) }

            data-height={item.height}
            data-width={item.width}
            data-alt={item.title}
        >
            <img
                src={imgUrl(item.image, 250)}
                alt={item.title}
                loading="lazy"
            />
            <p class="item-title">{item.title.length > 40 ? item.title.substring(0,35) + '...' : item.title}</p>
        </a>
        <!--         </figure> -->
    {/each}
</MasonryGrid>
<style lang="scss">
    .item {
        width: 250px;
        display: block;
        color: unset;
        text-decoration: none;
        background-attachment: fixed !important;
        background: var(--surface-4);
        transition: 100ms;
        display: inline-block;
        width: 250px;
        padding: 0;
        opacity: 1;
        position: relative;
        &:hover {
            // box-shadow: rgba(3, 4, 7, 0.22) 0px -1px 2px 0px, rgba(3, 4, 7, 0.23) 0px 3px 2px -2px, rgba(3, 4, 7, 0.23) 0px 7px 5px -2px, rgba(3, 4, 7, 0.24) 0px 12px 10px -2px, rgba(3, 4, 7, 0.25) 0px 22px 18px -2px, rgba(3, 4, 7, 0.26) 0px 41px 33px -2px, rgba(3, 4, 7, 0.27) 0px 100px 80px -2px;
            box-shadow: var(--shadow-6);

        }
    }

    .item-title {
        margin: 0;
        text-align: center;
        color: var(--text-1);
        font-size: var(--font-size-2);
        font-weight: 900;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-inline: 10%;
        background-attachment: fixed !important;
        background:  linear-gradient(210deg, rgba(var(--lavender),0.8) 0vw, 40vw, rgba(var(--granite),0.8) 40vw 100vw);
        opacity: 0.01;
        transition: 100ms;
        &:hover {
            opacity: 0.99;
        }
    }

    .item  img {
        width: 100%;
    }

    .masonrygrid.horizontal .item img {
        width: auto;
    }

    .loading {
        position: absolute;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-weight: bold;
    }

</style>
