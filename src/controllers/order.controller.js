const orderService= require("../services/order.service");


const purchaseorder= async (req, res)=>{
    try {
         const {orderId} = req.body;

         const result = await orderService.purchaseorderserv(orderId);
         res.status(200).json(result);

    } catch (error) {
        res.status(400).json(error.message);

    }
};



const addProductsinOrder= async (req, res)=>{
try {
    const {id}= req.params;

    const result= await orderService.addproductstoorder(id);

    if (result){
            res.status(200).json(result);

    }
} catch (error) {
    res.status(400).json(error.message);
}
};

const getorderwithproducts =async (req, res)=>{

    try {
            const { id } = req.params;

        const result= await orderService.getorder(id);
        res.status(200).json(result);

    } catch (error) {
        res.status(400).json(error.message);

    }


};


module.exports= {
    addProductsinOrder,
    purchaseorder,
    getorderwithproducts 
    
}