import dotenv from 'dotenv';
dotenv.config();

export default {
    
    JWT_SECRET: process.env.JWT_SECRET || 'Secret',
   




 

  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
}