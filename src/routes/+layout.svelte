<script>
    import "open-props/style";
    import "open-props/normalize";
import "bigger-picture/css";
    import "$lib/main.scss"
    import Header from '$lib/components/header.svelte'
</script>
<Header />
<div class="top-level-wrapper">
<slot />
</div>

<style>
    .top-level-wrapper {
        margin-block: 10vh;
    }
</style>
