import { MongoClient, ServerApiVersion } from 'mongodb';
import { PUBLIC_MONGODB_URI } from "$env/static/public";
import { json } from '@sveltejs/kit';

const client = new MongoClient(PUBLIC_MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function addBulkTweets(tweets) {
  try {
    await client.connect();
    const database = client.db('xseon-links');
    const collection = database.collection('tweets');

    const result = await collection.insertMany(tweets);
    console.log(`Inserted ${result.insertedCount} tweets`);
    return result.insertedCount;
  } catch (error) {
    console.error('Error inserting tweets:', error);
    throw error;
  } finally {
    await client.close();
  }
}

export async function POST({ request }) {
  try {
    const { data } = await request.json();
    if (!data || !Array.isArray(data)) {
      return json({ error: 'Invalid request body' }, { status: 400 });
    }
    
    const insertedCount = await addBulkTweets(data);
    return json({ message: `${insertedCount} tweets added successfully` }, { status: 200 });
  } catch (error) {
    console.error('Error adding bulk tweets:', error);
    return json({ error: 'Error adding bulk tweets' }, { status: 500 });
  }
}