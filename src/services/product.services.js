const models= require("../models");
const {products, users}= models;
class productService {
static async newProduct (product){
try {
    const result= await products.create(product);
    return result;
} catch (error) {
     throw error;
}
};
static async getAllProducts(){
    try {
        const result= await products.findAll({include:{
            model: users,
            as: "user",
            attributes:["username"]
        }});
       if(result){
         result.filter(product=> product.avaliableQty >= 1);

                    return result;
       }
    } catch (error) {
        throw error;
    }
}
};
module.exports= productService;