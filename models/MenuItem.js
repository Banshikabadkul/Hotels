const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name :{
    type:String,
    required:true,
    unique:true
  },
  price:{
    type:Number,
    required:true
  },
  taste:{
    type:String,
    enum:['sweet','spicy','sour'],
    required:true
  },
  is_drink :{
    type:Boolean,
    default:false
  },
  ingredient :{
    type:[String],
    default:[]
  },
  numSale:{
    type:Number,
    default:0
  }
});

const MenuItem = mongoose.model('Item',menuItemSchema);
module.exports = MenuItem;