import express from 'express';

import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';
const router = express.Router();

router.post("/", isAuth, async (req, res) => {
  const newOrder = new Order({
    orderItems: req.body.orderItems,
    user: req.user._id,
    shipping: req.body.shipping,
    payment: req.body.payment,
    itemsPrice: req.body.itemsPrice,
    taxPrice: req.body.taxPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
  });
  const newOrderCreated = await newOrder.save();
  res.status(201).send({ message: "New Order Created", data: newOrderCreated });
});

router.get("/:id", isAuth, async(req, res) =>{
  const order = await Order.findById(req.params.id);
  if(order){
    res.send(order);
  }else{
    send.status(404).send({message: "Order Not Found"})
  }
})
 export default router;