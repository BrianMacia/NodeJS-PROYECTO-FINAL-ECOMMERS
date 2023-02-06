const authRoutes= require("./auth.route");

const productsRoutes= require("./products.routes");
const cartRoutes= require("./cart.routes");
const orderRoutes= require("./order.routes");

const routerApi= (app)=>{
app.use("/ecommerce/cart", cartRoutes);
app.use("/ecommerce/orders", orderRoutes);
app.use("/ecommerce/auth", authRoutes);
app.use("/ecommerce", productsRoutes);
};

module.exports = routerApi;