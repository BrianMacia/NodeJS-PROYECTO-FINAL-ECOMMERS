const models= require("../models");

const {productincart,cart, order, productinorder}=models;

class orderService {

static async addproductstoorder (userId){
try {
    const cartfinded= await cart.findOne( {
        where:{userId},
        include: {
            model: productincart,
            as: "productincarts"
        }
    });
    if (cartfinded){
        const createorder= await order.create({
            totalPrice: cartfinded.totalPrice,
             userId: cartfinded.userId,
        });
        console.log(createorder);
  const idrandom= Math.floor(Math.random()*10000000);
  const findorder= await order.findOne({where: {userId}});

  if(findorder){
    await cartfinded.productincarts.forEach(itemincart => {
                     productinorder.create({ id: idrandom,
                        orderId: findorder.id,
                        productId: itemincart.productId,
                        quantity: itemincart.quantity,
                        price: itemincart.price,

                    });  
                
    });
                    return {message: "everithing ok"};
  } else{
    return {message:"something wrong"};
  }
       
    } 
} catch (error) {
    throw error;
}
};

static async getorder (userId){
    try {
        const orderfinded= await order.findOne({where: {userId},
        include:{
            model: productinorder,
            as: "productinorders"
        }});
        return orderfinded;
    } catch (error) {
        throw error;
    }
};


static async purchaseorderserv(orderId){
try {
    const findorder= await order.findByPk(orderId,{ 
        include: {
            model: productinorder,
            as: "productinorders"
        }
    });
    if (findorder){
        await findorder.update({status: true});
        await findorder.productinorders.forEach(productinorder=>{
            productinorder.update({status: true});
        });
        return findorder;
    }
} catch (error) {
    throw error;
}
}
};
module.exports= orderService;
