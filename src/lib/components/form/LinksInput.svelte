<script>
	import Input from "./Input.svelte";
    let url;
    let author;
    let content;
    let image_urls = [];
    let video_urls = [];
</script>
<!-- make all row of inputs based on this data:         "author": ,
        "content": ",
        "url": ,
        "image_urls": [
            
        ],
        "video_urls": []-->

<Input
    title="Author"
    placeholder="author"
    bind:value={author}
    type="url"
/>
<Input
    title="URL"
    placeholder="url"
    bind:value={url}
    type="url"
/>
<Input
    title="Content"
    placeholder="content"
    bind:value={content}
    type="url"
/>
<Input
    title="Image URL"
    placeholder="image url"
    bind:value={image_urls}
    type="url"
/>
<Input
    title="Video URL"
    placeholder="video url"
    bind:value={video_urls}
    type="url"
/>


