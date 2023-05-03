import { StatusCodes } from "http-status-codes";
import BookModel from "../models/BookModel.js"

import {BadRequestError}  from "../errors/index.js"

let CreateBook=async (req,res)=>{
    let {name,email,phone,person,startTime,endTime,date}=req.body

    if(!name || !email || !person || !phone || !startTime || !endTime || !date){
        throw new BadRequestError("Please Provide all the values")
    }

    if(new Date(date)<new Date(Date.now()- 1*24*60*60*1000)){
        throw new BadRequestError("Please Do not Select the past dates")
    }
    if(new Date(date)>new Date(Date.now() + 5*24*60*60*1000)){
        throw new BadRequestError("Please Select the dates within the 5 days of period")
    }

    if(phone<1 || person<1){
        throw new BadRequestError("The Number Values must be greater than 1")
    }

    if(startTime===endTime){
        throw new BadRequestError("There Must be different between the time")
    }

    let alreadyBooked=await BookModel.findOne({date:date,startTime:startTime,endTime:endTime})

    if(alreadyBooked){
        throw new BadRequestError("Sorry! There is already a booking in this time slot. Please Choose Another")
    }

    await BookModel.create(req.body)
    res.status(StatusCodes.CREATED).json({msg:"Successs"})
}

export {CreateBook}