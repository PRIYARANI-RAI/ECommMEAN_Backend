const mongoose = require('mongoose');

//Schema
const orderItemSchema = mongoose.Schema({
   quantity:{
    type:Number,
      required:true
   },
   product:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'meanproducts'
   }
});
exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);