const {Router}= require("express");
const { addProductsinOrder, getorderwithproducts, purchaseorder } = require("../controllers/order.controller");
const authMiddleware = require("../middlewares/auth.middleware");




const router= Router();

router.post("/addproductstoorderbyuser/:id", authMiddleware,addProductsinOrder);

router.get("/getproductsinorderbyuser/:id",authMiddleware, getorderwithproducts);

router.post("/purchase",authMiddleware, purchaseorder); 


module.exports= router;
