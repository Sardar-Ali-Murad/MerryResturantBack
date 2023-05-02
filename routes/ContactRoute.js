import express from "express"

let router=express.Router()
import {createContact}  from "../controllers/ContactController.js"

router.route("/").post(createContact)

export default router