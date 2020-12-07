import mongoose from 'mongoose';

const paintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number,default:0, required: true },

  category: { type: String, required: true },
  original: { type: Number, default:0,required: true },
  posterQty: { type: Number, default:0, required: true },
  description: { type: String, required: true },

});

const paintModel = mongoose.model('Paint', paintSchema);

export default paintModel;