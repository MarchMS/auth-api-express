import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI!).then(() => {
  app.listen(3000, () => console.log('Server started on port 3000'));
});