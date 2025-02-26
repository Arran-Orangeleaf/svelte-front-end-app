<script>
    import Boxes from '$lib/components/Boxes.svelte'
    import Feature from '$lib/components/Feature.svelte';
    let { data } = $props();
    //console.log(data.post);
    console.log(data.post);
</script>
<h1 class="text-5xl">{data.post["Page Title"]}</h1>
<br>
<Feature slides={data.post.feature}></Feature>
<div class="max-w-[1280px] min-w-[320px] sm:w-[92%] m-auto">
    {@html data.post["Custom Content"]}
    <div>
        <Boxes boxSet={data.post.boxes}></Boxes>
    </div>
</div>