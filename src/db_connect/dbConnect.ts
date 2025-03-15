import { config } from '@/config';
import mongoose from 'mongoose';

export async function connectDb() {
  try {
    await mongoose.connect(config.MONGO_URI);
    const connection = mongoose.connection;
    connection.on('connection', () => {
      console.log('Mongodb connected');
    });
    connection.on('error', (err) => {
      console.log('mongodb connection error.', err);
      process.exit();
    });
  } catch (error) {
    console.log('something went wrong in connecting to db', error);
  }
}
