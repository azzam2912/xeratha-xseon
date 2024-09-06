<script>
	import { invalidateAll } from '$app/navigation';
	import { addTweet, deleteTweet } from '$lib/tweets.js';
	import { user } from '$lib/user.js';

	export let data;

	const add = async (e) => {
		e.preventDefault();
		const formEl = e.target;
		const formData = new FormData(formEl);
		await addTweet(formData.get('linkUrl'), formData.get('title'), formData.get('content'));
		invalidateAll();

		// Reset form
		formEl.reset();
	};

	const remove = async (id) => {
		await deleteTweet(id);
		invalidateAll();
	};
</script>

{#if $user}
	<section>
		<h2>Submit Tweet</h2>
		<form on:submit={add}>
            <label>
				Link URL
				<input type="text" placeholder="Link URL" name="linkUrl" required />
			</label>
			<label>
				Title
				<input type="text" placeholder="Title" name="title" required />
			</label>
			<label>
				Content
				<textarea placeholder="Content" name="content" />
			</label>
			<button type="submit">Submit</button>
		</form>
	</section>
{:else}
	<section><p>Please login to submit an tweet.</p></section>
{/if}

<section>
	<h2>Latest Tweets</h2>
	{#if data.tweets.total === 0}
		<p>No tweets yet.</p>
	{:else}
		<p>{data.tweets.total} tweets found</p>
	{/if}
	<ul>
		{#each data.tweets.documents as tweet}
			<li>
				<strong>{tweet.title}</strong>
				{#if tweet.content}
					<p>{tweet.content}</p>
				{/if}
				{#if $user}
					<button type="button" on:click={() => remove(tweet.$id)}>Remove</button>
				{/if}
			</li>
		{/each}
	</ul>
</section>
