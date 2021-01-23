import dotenv from 'dotenv';
dotenv.config();

export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/paint',
    JWT_SECRET: process.env.JWT_SECRET || 'Secret',
   




 

  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
}