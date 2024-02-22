const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  age : {
    type:Number,
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  salary:{
    type:Number,
    required:true
  },
  work:{
    type:String,
    enum:['chef','manager','waiter']
  },
  address:{
    type:String,
    required:true
  }
})
//creste person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;