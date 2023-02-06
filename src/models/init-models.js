const DataTypes = require("sequelize").DataTypes;
const _cart = require("./cart");
const _order = require("./order");
const _productincart = require("./productincart");
const _productinorder = require("./productinorder");
const _products = require("./products");
const _users = require("./users");

function initModels(sequelize) {
  const cart = _cart(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const productincart = _productincart(sequelize, DataTypes);
  const productinorder = _productinorder(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  productincart.belongsTo(cart, { as: "cart", foreignKey: "cartId"});
  cart.hasMany(productincart, { as: "productincarts", foreignKey: "cartId"});
  productinorder.belongsTo(order, { as: "order", foreignKey: "orderId"});
  order.hasMany(productinorder, { as: "productinorders", foreignKey: "orderId"});
  productincart.belongsTo(products, { as: "product", foreignKey: "productId"});
  products.hasMany(productincart, { as: "productincarts", foreignKey: "productId"});
  productinorder.belongsTo(products, { as: "product", foreignKey: "productId"});
  products.hasMany(productinorder, { as: "productinorders", foreignKey: "productId"});
  cart.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(cart, { as: "carts", foreignKey: "userId"});
  order.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(order, { as: "orders", foreignKey: "userId"});
  products.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(products, { as: "products", foreignKey: "userId"});

  return {
    cart,
    order,
    productincart,
    productinorder,
    products,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
