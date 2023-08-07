<script>
import {title} from '$lib/stores'
import {base} from '$app/paths'
import {page} from '$app/stores'
console.log($page.url.pathname)
console.log(base)
</script>
<header >
    <div class="left">NU.BERRY</div>
    <div class="mid"></div>
    {#if $page.url.pathname !== `${ base }/` }
        <div class="right"><a href="{base}/" class="llines">Newberry Postcard Galleries</a></div>
{/if}
</header >

    <style>
    header {
        display: flex;
        z-index: var(--layer-2);
        justify-content: space-between;
        align-items: center;
        padding-inline: 16px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        background: var(--surface-1);
        background-attachment: fixed;

    }
    </style>

