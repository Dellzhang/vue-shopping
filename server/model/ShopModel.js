const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: String,
  price:Number,
  dealid:Number,
  title: String,
  count: {
    type: Number,
    default: 1
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }
})

const ShopModel = mongoose.model('shop',shopSchema)

module.exports = ShopModel