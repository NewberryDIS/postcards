<script>
    import {heroImage, title, y} from '$lib/stores'

    $: sizeClass= $y > 250 ? 'sm' : 'lg'
</script>

{#if $heroImage}
<div class="bg" style="background: url('https://collections.newberry.org/IIIF3/Image/{$heroImage}/pct:25,20,50,25/max/0/default.jpg'); background-size: cover; background-position: top center; background-attachment: fixed; ;" />
{/if}
<div class='titlecard {sizeClass}' >
    <h1>{$title}</h1>
</div>

<style>
.lg {
    transform: scale(2);
}
.sm {
    transform: scale(1);
}
.titlecard h1 {
    pointer-events: auto;
    max-inline-size: none;
    text-align: center;
    font-size: 40px;
}
.titlecard {
    pointer-events: none;
    position: sticky;
    top: -30vh;
    transition: 200ms;
    z-index: var(--layer-3);
    /* background: var(--surface-1); */
    /* background-attachment: fixed; */
    height: 50vh;
    padding-top: 30vh;
    width: 80%;
    margin: 0 auto;
}
.bg {
    pointer-events: none;
    width: 100vw;
    overflow: hidden;
    opacity: 0.5;
    position: absolute;
    top: 0; 
    height: 50vh;
    border: 1px solid black;
    z-index: var(--layer-2)

}

</style>
