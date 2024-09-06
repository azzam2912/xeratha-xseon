import { json } from '@sveltejs/kit';
import * as db from '$lib/server/tweets.js';


export async function POST({ request }) {
  try {
    const { data } = await request.json();
    if (!data || !Array.isArray(data)) {
      return json({ error: 'Invalid request body' }, { status: 400 });
    }
    const insertedCount = await db.addBulkTweets(data);
    return json({ message: `${insertedCount} tweets added successfully` }, { status: 200 });
  } catch (error) {
    console.error('Error adding bulk tweets:', error);
    return json({ error: 'Error adding bulk tweets' }, { status: 500 });
  }
}