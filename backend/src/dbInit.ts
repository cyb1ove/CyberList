import db from './app/config/db';
import mongoose, { ConnectOptions } from 'mongoose';

export default async () => {
  return await mongoose.connect(db.url, db.mongoose as ConnectOptions);
}
