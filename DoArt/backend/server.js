import express from 'express';
import data from '../backend/data.js';
const app = express();

app.get("/api/paint/:id", (req,res) =>{
    const paintId = req.params.id;
    const paint = data.paintings.find(x => x._id === paintId);
    if (paint) 
        res.send(paint);
        else
        res.status(404).send({msg: "Paint Not Found."})
    
    
});

app.get("/api/paint", (req,res) =>{
    res.send(data.paintings);
})

app.listen(5000, () => {console.log("Server started at http://localhost:5000") })