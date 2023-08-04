<script>
    import Masonry from '$lib/components/masonry.svelte'
    export let data
    const {processedData} = data
    import { titleString } from '$lib/stores'
    // console.log(data)
    $titleString = processedData.title
</script>
<h1><a href={data.packageExtractor[0] + '2KXJ8ZSA9MFDO' + data.packageExtractor[1]}>hreeef </a></h1>
<Masonry postcards={ processedData.items } />

