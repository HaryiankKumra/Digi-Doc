// Here we are establishing the connection with the database on our MongoDB server using Mongoose 


import { connect } from 'mongoose';
import { config } from 'dotenv';

config()

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully to Digi Doc');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
