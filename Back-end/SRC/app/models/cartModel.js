const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  id: { type: Number, required: true },
  number: { type: Number},
});


const cart = mongoose.model('cart', cartSchema);

module.exports = cart;
