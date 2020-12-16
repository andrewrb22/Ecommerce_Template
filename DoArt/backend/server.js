import express from 'express';
import data from '../backend/data.js';
import config from './config.js';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import paintRoute from './routes/paintRoute.js';
import bodyParser from 'body-parser'

import dotenv from 'dotenv';
import orderRouter from './routes/orderRouter.js';

dotenv.config();

const mongodbUrl= config.MONGODB_URL;

mongoose.connect(mongodbUrl ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));




const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/paint", paintRoute);
app.use("/api/order", orderRouter)

// app.get("/api/paint/:id", (req,res) =>{
//     const paintId = req.params.id;
//     const paint = data.paintings.find(x => x._id === paintId);
//     if (paint) 
//         res.send(paint);
//         else
//         res.status(404).send({msg: "Paint Not Found."})
    
    
// });

// app.get("/api/paint", (req,res) =>{
//     res.send(data.paintings);
// })

app.listen(5000, () => {console.log("Server started at http://localhost:5000") })