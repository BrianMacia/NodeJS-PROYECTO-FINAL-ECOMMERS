const productService= require('../services/product.services');

const createProducts= async(req, res)=>{
    try {
        const product= req.body;
        const result= await productService.newProduct(product);

        if (result){
            res.status(200).json({message: "product created succesfully"})
        }else{
            res.status(400).json({message: "error"})

        }
    } catch (error) {
        res.status(400).json(error.message);

    }

};

const getProducts= async ( req, res) => {
    try {
        const products= await productService.getAllProducts();

        res.status(200).json(products);

        
    } catch (error) {
        res.status(400).json(error.message);

    }
}

module.exports={createProducts,
getProducts,}


