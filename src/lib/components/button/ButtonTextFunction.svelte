<script>
    export let title = "Button";
    export let kind = "underline";
    export let func;
</script>
<button class="button {(kind == "underline" ? "text-blue-500 underline" : "")}" on:click={func}>{title}</button>