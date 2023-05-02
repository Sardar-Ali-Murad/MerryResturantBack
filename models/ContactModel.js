import mongoose from "mongoose";
import validator from 'validator'

let ContactSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please Provide the name"]
  },
  emailAddress: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    unique: true,
  },
  message:{
    type:String,
    required:[true,"Please Provide the message"]
  }
},{timestamps:true})

export default mongoose.model("HotelAppContactSchema",ContactSchema)