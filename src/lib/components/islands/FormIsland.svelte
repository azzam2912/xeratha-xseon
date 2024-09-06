<script>
    export let onSubmit;
</script>
<div class="flex items-center justify-center">
    <form on:submit={onSubmit}>
        <div class="flex-auto flex flex-col justify-center items-center h-1/2 m-8 p-4 rounded-md border-2 border-black">
            <slot />
        </div>
    </form>
</div>
