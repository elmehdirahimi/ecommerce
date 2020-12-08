import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  productsIDs: { type: [mongoose.Schema.Types.ObjectId] ,required: true },
  productsQty: { type: [Number],required: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  numero: { type: Number, default: 0, required: true },
  email: { type: String, required: true },
  livraison: { type: String, default: 0, required: true },
});

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;