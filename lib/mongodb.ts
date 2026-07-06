import { MongoClient } from 'mongodb';

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

export async function getMongoClient(): Promise<MongoClient> {
  if (!process.env.MONGODB_URI) {
    throw new Error('กรุณาเพิ่ม MONGODB_URI ใน .env');
  }

  const uri = process.env.MONGODB_URI;
  const options = {};

  if (process.env.NODE_ENV === 'development') {
    let globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    return globalWithMongo._mongoClientPromise;
  } else {
    if (!clientPromise) {
      client = new MongoClient(uri, options);
      clientPromise = client.connect();
    }
    return clientPromise;
  }
}

