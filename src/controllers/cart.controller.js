const cartService = require("../services/cart.services");

const getCart = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await cartService.getCartByUserId(id);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);

    }
};
const addProductsinCart = async (req, res) => {

    try {
        const { id } = req.params;
        const findproduct = await cartService.findproduct(id);
        if (findproduct) {
            const {cartId} = req.body;

            const findcart = await cartService.findcart(cartId);

            if (findcart) {
                const totalprice = findproduct.price + findcart.totalPrice;
                await cartService.updatecart(totalprice, cartId);
                const product = req.body;
                const result = await cartService.addproductstocart(product);
                res.status(200).json(result);

            };



        }


      
    } catch (error) {
        res.status(400).json(error.message);

    }
};



module.exports = {
    addProductsinCart,
    getCart
};