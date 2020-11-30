import express from 'express';
import data from '../backend/data.js';
const app = express();

app.get("/api/paint", (req,res) =>{
    res.send(data.paintings);
})

app.listen(5000, () => {console.log("Server started at http://localhost:5000") })