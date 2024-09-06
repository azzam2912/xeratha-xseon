<script>
    export let slot = "Button";
    export let url = "/";
</script>

<div class="rounded-md bg-white/10 p-2 m-2 backdrop-blur-0">
    <a href={url}>{slot}</a>
</div>