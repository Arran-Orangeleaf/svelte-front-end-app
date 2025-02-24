<script>
    import Boxes from '$lib/components/Boxes.svelte'
    let { data } = $props();
    console.log(data.post.boxes);
</script>
<h1 class="text-5xl">{data.post["Page Title"]}</h1>
<br>
<div>
    {data.post["Custom Content"]}
</div>
<div>
    {JSON.stringify(data.post)}
    <Boxes boxSet={data.post.boxes}></Boxes>
</div>