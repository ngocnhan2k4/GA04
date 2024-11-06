const product = require("../models/Product");

async function getProducts() {
    const result = await product.findAll();
    const products = [];
    result.forEach((item) => {
        let { id, name, cost, image } = item;
        cost = cost.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
        });
        products.push({ id, name, cost, image });
    });
    return products;
}
async function getProductById(id) {
    const result = await product.findByPk(id);
    if (!result) {
        return null;
    }
    let { name, cost, image } = result;
    cost = cost.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
    });
    return { id, name, cost, image };
}

module.exports = { getProducts, getProductById };
