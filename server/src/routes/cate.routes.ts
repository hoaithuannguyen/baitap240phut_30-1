import express from "express"
import { addCate, getAllCate, getCateById } from "../controllers/cate.controller"
const cateRoutes = express.Router()

cateRoutes.get("/:id", getCateById)
cateRoutes.get("/",getAllCate)
cateRoutes.post("/",addCate)

export default cateRoutes