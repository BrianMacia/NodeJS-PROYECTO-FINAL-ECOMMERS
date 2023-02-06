const models= require("../models");


const {productincart,cart, products}=models;


class cartService {
static async createcart(userId){
    try {
        const result = cart.create({userId: userId, totalPrice: 0});
        return result;
    } catch (error) {
        throw error;
    }
};

static async getCartByUserId  (userId){
    try {
        const cartfinded = cart.findOne({
            where: {userId},
            include:{
                model: productincart,
                as: "productincarts"
            }
        });
        return cartfinded;
    } catch (error) {
        throw error;
    }
};

static async findproduct (id){
try {
          const finditem= await products.findByPk(id);
          return finditem;

} catch (error) {
    throw error;
}

};
static async findcart (cartId){
    try {
        const cartfinded= await cart.findByPk(cartId);

        return cartfinded;
    } catch (error) {
        throw error;
    }
};

static async updatecart (totalPrice,id){
try {
    const findedcart= await cart.findByPk(id);
     await findedcart.update({totalPrice: totalPrice});
     await findedcart.save();
    return findedcart;
} catch (error) {
    throw error;
}
}

 static async addproductstocart (product){
try {

    const result= await productincart.create(product);
        return result;
} catch (error) {
    throw error;
}

 };
};
module.exports= cartService;



