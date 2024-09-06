<script>
	import { user } from '$lib/user';
	import ButtonSubmit from '../../lib/components/button/ButtonSubmit.svelte';
	import ButtonTextFunction from '../../lib/components/button/ButtonTextFunction.svelte';
	import Input from '../../lib/components/form/Input.svelte';
	import FormIsland from '../../lib/components/islands/FormIsland.svelte';
	import Island from '../../lib/components/islands/Island.svelte';

	const login = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		await user.login(formData.get('email'), formData.get('password'));
	};

	const register = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		if (formData.get('password') !== formData.get('confirmPassword')) {
			alert('Passwords do not match');
			return;
		}
		await user.register(formData.get('email'), formData.get('password'), formData.get('name'));
	};

	let isLogin = true;
</script>

{#if $user}
	<Island>
		<h1>Oops you are already logged in</h1>
		<h2>Perhaps wanna <button class="text-red-500 text-xl" on:click={user.logout}>logout</button>?</h2>
		<h2>Or just wanna hangin around to <a class="text-blue-500 text-xl" href="/">home</a>?</h2>
	</Island>
{:else}
<div class="flex flex-col justify-center items-center">
	<h1 class="text-3xl font-semibold m-2">Login or register</h1>

	{#if isLogin}
		<FormIsland onSubmit={login}>
			<Input title="Email" type="email" name="email" />
			<Input title="Password" type="password" name="password" />
			<ButtonSubmit text="Login" />
			Wanna register an account?<ButtonTextFunction title="Register" kind="underline" func={() => (isLogin = false)} />
		</FormIsland>	
	{:else}
		<FormIsland onSubmit={register}>
			<Input title="Email" type="email" name="email" />
			<Input title="Password" type="password" name="password" />
			<Input title="Confirm Password" type="password" name="confirmPassword" />
			<Input title="Name" type="text" name="name" />
			<ButtonSubmit text="Register" />
			Already have an account? <ButtonTextFunction title="Login" kind="underline" func={() => (isLogin = true)} />
		</FormIsland>	
	{/if}



</div>
{/if}
