<script>
    export let slot = "Button";
    export let url = "/";
</script>

<div class="shrink-0 grow-0 rounded-full w-10 h-10 bg-green-500 p-2 m-2 backdrop-blur-0 text-4xl flex justify-center items-center">
    <a href={url}>{slot}</a>
</div>