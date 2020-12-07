import express from 'express';
import Paint from '../models/paintModel.js';


const router = express.Router();
// get back list of paintings

router.get("/", async (req,res) =>{
    const paintings = await Paint.find({});
    res.send(paintings);
});

// post the list of paintigs
 router.post("/", async(req, res) => {
   const paint = new Paint ({
     name: req.body.name,
     price: req.body.price,
     image: req.body.image,
     category: req.body.category,
     original: req.body.original,
     postQty: req.body.posterQty,
     description: req.body.description,
   });
   const newPaint = await paint.save();
   if(newPaint){
      return res.status(201).send({message: 'New Paint Created', data: newPaint});
   }
   return res.status(500).send({ message: 'Error to create Paint'});
 })
  
  export default router;