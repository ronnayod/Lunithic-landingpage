import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('กรุณาเพิ่ม MONGODB_URI ใน .env');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // ใน development mode ใช้ global variable เพื่อไม่ให้สร้าง connection ใหม่ทุกครั้ง
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // ใน production mode สร้าง client ใหม่
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
