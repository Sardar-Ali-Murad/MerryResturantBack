import express from "express"

let router=express.Router()
import {CreateBook}  from "../controllers/BookingController.js"

router.route("/").post(CreateBook)

export default router