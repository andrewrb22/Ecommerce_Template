import express from 'express';
import Paint from '../models/paintModel.js';


const router = express.Router();
// get back list of paintings

router.get("/", async (req,res) =>{
    const paintings = await Paint.find({});
    res.send(paintings);
});

router.put("/:id", async (req, res) => {
  const paintId = req.params.id;
  const paint = await Paint.findById(paintId);
  if(paint){
  
     paint.name = req.body.name;
     paint.price = req.body.price;
     paint.images = req.body.images;
     paint.category = req.body.category;
     paint.original = req.body.original;
     paint.posterQty = req.body.posterQty;
     paint.description = req.body.description;
     const updatedPaint = await paint.save();
 if(updatedPaint){
    return res
    .status(200)
    .send({message: 'Paint Updated', data: updatedPaint});
 }
  }
  return res.status(500).send({ message: 'Error to updating Paint'});
})

router.delete('/:id', async (req, res) => {
  const deletedPaint = await Paint.findById(req.params.id);
  if (deletedPaint) {
    await deletedPaint.remove();
    res.send({ message: 'Paint Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
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
 });


  
  export default router;