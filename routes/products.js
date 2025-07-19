import express from "express"
import { getAllProducts, addProducts, deleteProducts } from "../contollers/products.js"

const router = express.Router()

router.get("/", getAllProducts)

router.post("/", addProducts)

router.delete("/:id", deleteProducts)

export default router