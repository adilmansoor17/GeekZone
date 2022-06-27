const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cart = new Schema(
  {
    product_name:String,
    product_id:Schema.Types.ObjectId,
    product_price:Number,
    quantity:Number,
    person_id:Schema.Types.ObjectId,
    person_name:String,

    date:String,
    address:String,
    status:String,
    method:String,
    payment_id:Schema.Types.ObjectId
  }
);

module.exports = mongoose.model("cart", cart, "cart");