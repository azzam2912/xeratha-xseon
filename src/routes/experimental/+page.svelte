<script>
	import Island from "$lib/components/islands/Island.svelte";
    /** @type {import('./$types').PageData} */
	export let data;
    let count = 2;
</script>

<head>
    <title>Xeratha Xseon</title>
</head>



    <!-- for loop-->
<div class="">
    <h1 class="text-3xl font-bold underline">
        <Island kind="danger">
            {#await data.checkConnection}
                <p>Checking connection...</p>
            {:then result}
                <p>{result}</p>
            {:catch error}
                <p>Error: {error.message}</p>
            {/await}
        </Island>
    </h1>
<ul>
    {#await data.tweets}
        <Island kind="success">
            <p>Loading tweets...</p>
        </Island>
    {:then tweets}
        {#each tweets as tweet }
            <li>
                <Island>
                    <p>{tweet.author}</p>
                    <p>{tweet.content}
                        <a target="_blank" href={tweet.url}>{tweet.url}</a>
                    </p>
                </Island>
            </li>
        {/each}
    {:catch error}
        <Island kind="danger">
            <p>Error: {error.message}</p>
        </Island>
    {/await}
</ul>
</div>

