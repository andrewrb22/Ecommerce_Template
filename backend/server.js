import express from 'express';
import path from 'path';
import config from './config.js';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import paintRoute from './routes/paintRoute.js';
import bodyParser from 'body-parser'


import orderRouter from './routes/orderRouter.js';





mongoose.connect(  
  process.env.MONGODB_URI || 'mongodb://localhost/DoArt',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );



const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/paint", paintRoute);
app.use("/api/orders", orderRouter)
app.get('/api/config/paypal', (req, res) => {
    res.send(config.PAYPAL_CLIENT_ID || 'SB')
});

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

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/./DoArt/doart/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/./DoArt/doart/build/index.html'))
);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});