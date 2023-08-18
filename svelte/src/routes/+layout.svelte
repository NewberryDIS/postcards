<script>
    import "open-props/style";
    import "open-props/normalize";
    import "bigger-picture/css";
    import "$lib/main.scss"
    import {heroImage, title, y} from '$lib/stores'
    import Header from '$lib/components/header.svelte'
    import Title from '$lib/components/title.svelte'
</script>
<Header />
<svelte:window bind:scrollY={$y} />
<Title />
<div class="top-level-wrapper">
    <slot />
</div>

<style>
    .top-level-wrapper {
        margin-block: 10vh;
    }
</style>
