import * as db from '$lib/server/tweets';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
	return {
		tweets: await db.getTweets(),
        checkConnection: await db.checkConnection()
	};
}