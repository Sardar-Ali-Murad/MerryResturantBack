import { StatusCodes } from "http-status-codes";
import ContactModel from "../models/ContactModel.js"
import {BadRequestError} from "../errors/index.js"

let createContact=async (req,res)=>{
    let {name,emailAddress,message}=req.body

    if(!name || !emailAddress || !message){
        throw new BadRequestError("Please Provide all the values")
    }

    await ContactModel.create({name:name,emailAddress:emailAddress,message:message})

    res.status(StatusCodes.CREATED).json({msg:"Done"})
}


export {createContact}

