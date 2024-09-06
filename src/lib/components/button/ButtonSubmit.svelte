<script>
    import { isLoading } from '$lib/stores';
    export let text = "Submit";
</script>
<button class="m-2 rounded-lg border-2 border-[#3b49df] hover:bg-[#3b49df] hover:text-white px-4 py-2" disabled={$isLoading ? "disabled" : ""} type="submit"> 
    {$isLoading ? "Loading ..." : text}
</button>
