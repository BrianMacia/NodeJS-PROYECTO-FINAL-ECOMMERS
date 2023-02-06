const swaggerJSDoc= require("swagger-jsdoc");

const swaggerUi = require("swagger-ui-express");
require('dotenv').config();


const swaggerSpec= swaggerJSDoc(options);
const swaggerDocs= (app, port)=>{
    app.use("/ecommerce/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/ecommerce/docs.json", (req, res)=>{
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec)
    });
    console.log(`the documentation are avaliable in ${process.env.URL}: ${port}/ecommerce/docs`);
};


const options = {
    apis: ['./src/routes/auth.route.js', './src/models/users.js', './src/routes/cart.routes.js', './src/models/cart.js', './src/routes/products.routes.js', './src/models/products.js', './src/routes/order.routes.js', './src/models/order.js' ],
    definition:{
        openapi: "3.0.0",
        info: {
            title: "E-COMMERS NODE JS ",
            version: "0.0.9",
            description: "API e-commerce"
        }
    }
};


module.exports= swaggerDocs;