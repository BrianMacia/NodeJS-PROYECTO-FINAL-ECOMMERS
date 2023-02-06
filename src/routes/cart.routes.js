const {Router}= require("express");

const {addProductsinCart,  getCart } = require("../controllers/cart.controller");
 const authMiddleware = require("../middlewares/auth.middleware");

const router= Router();
router.post("/addproduct/:id",authMiddleware, addProductsinCart);
router.get("/getcartbyuser/:id",authMiddleware, getCart);

module.exports= router;
