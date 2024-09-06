<script>
  import "../app.css";
  import { user } from '$lib/user';
  import Button from "$lib/components/button/ButtonUrlLight.svelte";
  import ButtonCircle from "$lib/components/button/ButtonCircle.svelte";
	import ButtonTextFunction from "../lib/components/button/ButtonTextFunction.svelte";
</script>

<nav class="sticky top-0 flex space-x-4 bg-[#1e293b] w-full h-16 text-white text-xl font-semibold" >
	<picture class="flex-none w-16 ml-2 hover:cursor-pointer">
		<a href="/"> 
			<img src="xeratha.png" alt="Xeratha Xseon Home">
		</a>
	</picture>
	<div class="flex-auto flex flex-row w- justify-center items-center container">
		<Button slot="Home" url="/" />
	</div>
	<div class="flex-end p-4 flex items-center justify-center">
			{#if $user}
				<ButtonCircle slot="+" url="/add-link" />
				<div class="flex space-x-4">
					<div class="border-2 border-dashed rounded-md bg-[#334155] p-2 m-2">
						<span>{$user.name}</span>
					</div>
					<ButtonTextFunction title="Logout" func={user.logout} />
				</div>
			{:else}
				<a href="/login">Login</a>
			{/if}
	</div>
</nav>

<slot />
