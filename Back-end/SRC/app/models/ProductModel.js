const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  id: { type: Number, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
});

const productSchema = new Schema({
  shoes: [shoeSchema],
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
