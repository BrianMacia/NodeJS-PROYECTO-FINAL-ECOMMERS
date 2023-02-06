const app = require("./app");

require("dotenv").config();
const swaggerDocs= require("../swagger");
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
    swaggerDocs(app, PORT);
});