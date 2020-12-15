import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    orderItems:[{
        name: {type: String, require: true},
        qty:{type:Number, require:true},
        images:{type:String, required: true},
        price:{ type:Number, required: true},
        paint:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Paint',
            required:true,
        },
    },
],
shippingAddress:{
    fullName: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    postalCode: {type: String, required: true},
    country: {type: String, required: true},
    
},
paymentMethod: { type: String, required:true},
itemsPrice: {type: Number, required:true},
shippingPrice: {type: Number, required:true},
taxPrice: {type: Number, required:true},
totalPrice: {type: Number, required:true},
user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'User',
    required:true,
},
isPaid: {type: Boolean, default:false},
paidDate: {type:Date},
isDelivered: {type:Boolean, default:false},
deliveredDate:{type: Date},
}, {
    timestamps: true,
}
);
const Order = mongoose.model('Order', orderSchema);
export default Order;