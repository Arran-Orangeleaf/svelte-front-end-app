<script>
    import Boxes from '$lib/components/Boxes.svelte'
    import Feature from '$lib/components/Feature.svelte';
    import Header from '$lib/components/Header.svelte';
    let { data } = $props();
    //console.log(data.post);
    console.log(data.post);
</script>
<Header header={data.header}></Header>
<h1 class="text-5xl">{data.postContent["Page Title"]}</h1>
<br>
<Feature slides={data.postContent.feature}></Feature>
<div class="max-w-[1280px] min-w-[320px] sm:w-[92%] m-auto">
    {@html data.postContent["Custom Content"]}
    <div>
        <Boxes boxSet={data.postContent.boxes}></Boxes>
    </div>
</div>