import { writable } from 'svelte/store';
import { ID } from 'appwrite';
import { goto } from '$app/navigation';
import { account } from '$lib/appwrite';
import { isLoading } from '$lib/stores';

// Avoid auth calls in server-side, so that a user is not shared between requests
const isBrowser = typeof window !== 'undefined';

const createUser = () => {
	const store = writable(null);

	async function init() {
		if (!isBrowser) return;
		try {
			store.set(await account.get());
		} catch (e) {
			console.log(e);
			store.set(null);
		}
	}

	init();

	async function register(email, password, name) {
		if (!isBrowser) return;
		isLoading.set(true);
		await account.create(ID.unique(), email, password, name);
		await login(email, password);
	}

	async function login(email, password) {
		if (!isBrowser) return;
		isLoading.set(true);
		await account.createEmailPasswordSession(email, password);
		await init();
		isLoading.set(false);
		goto('/'); // Redirect to home page after login
	}

	async function logout() {
		isLoading.set(true);
		await account.deleteSession('current');
		isLoading.set(false);
		store.set(null);
	}

	return {
		// Exposes the store's value with $user
		subscribe: store.subscribe,
		register,
		login,
		logout,
		init
	};
};

export const user = createUser();
