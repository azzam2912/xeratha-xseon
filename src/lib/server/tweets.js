import { MongoClient, ServerApiVersion } from 'mongodb';
import { MONGODB_URI } from "$env/static/private";


const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const DATABASE_NAME = 'xseon-links';
const DATABASE_COLLECTION = 'tweets';

export async function checkConnection() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    return "Pinged your deployment. You successfully connected to MongoDB!";
  } catch(error) {
    return error;
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function getTweets() {
  try {
    await client.connect();
    const collection = client.db(DATABASE_NAME).collection(DATABASE_COLLECTION);
    const tweets = await collection.find().toArray();
    const result = tweets.map(tweet => 
      ({
        ...tweet,
        _id: tweet._id.toString()
      })
    );
    return result;
  } catch (error) {
    console.error('Error getting tweets:', error);
    return error;
  } finally {
    await client.close();
  }
}

export async function addBulkTweets() {
  try {
    await client.connect();
    const collection = client.db(DATABASE_NAME).collection(DATABASE_COLLECTION);
    const tweets = {}
    const result = await collection.insertMany(tweets);
    return result
  } catch (error) {
    console.error('Error inserting tweet:', error);
    return error;
  } finally {
    await client.close();
  }
}

export async function addTweet(tweetJSON) {
  try {
    await client.connect();
    const collection = client.db(DATABASE_NAME).collection(DATABASE_COLLECTION);
    const result = await collection.insertOne(tweetJSON);
    return result
  } catch(error) {
    console.error('Error adding tweet:', error);
    return error;
  } finally {
    client.close();
  }
}

export async function deleteTweet(tweetId) {
  try {
    await client.connect();
    const collection = client.db(DATABASE_NAME).collection(DATABASE_COLLECTION);
    const result = await collection.deleteOne({ _id: tweetId });
    return result
  } catch(error) {
    console.error('Error adding tweet:', error);
    return error;
  } finally {
    client.close();
  }
}