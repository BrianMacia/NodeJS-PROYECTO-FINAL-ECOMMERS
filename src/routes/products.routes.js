const {Router}= require("express");

const {createProducts, getProducts}= require("../controllers/products.controller");
 const authMiddleware = require("../middlewares/auth.middleware");

const router= Router();

router.post("/products/create", authMiddleware,createProducts);

router.get("/products", getProducts);

module.exports= router;