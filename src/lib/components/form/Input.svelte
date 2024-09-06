<script>
    export let title;
    export let type;
    export let name;
    export let id;
    export let value = "";
    export let onChange;
    export let isRequired = false;
</script>
<div class="flex flex-row items-center justify-center m-1 p-1 w-full sm:w-[400px] lg:w-[600px]">
    <label class="w-1/3" for={id}>{title}</label>
    <div class="flex-auto">
        {#if type === "textarea"}
            <textarea class="rounded-md border-2 p-1 min-h-16 w-full resize-y" type={type} placeholder={title} name={name} required={isRequired} id={id} value={value} on:change={onChange}/>
        {:else}
            <input class="rounded-md border-2 p-1 w-full" type={type} placeholder={title} name={name} required={isRequired} id={id} value={value} on:change={onChange}/>
        {/if}
    </div>
</div>