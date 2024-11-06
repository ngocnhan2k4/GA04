//const {getProducts} = require("../models/Product");
//const product = require('../models/product1')
const e = require("express");
const { getProducts, getProductById } = require("../services/productService");
const productListController = {
    async index(req, res) {
        let products = [];
        products = await getProducts();

        console.log(products);
        res.render("productList", {
            title: "Product List",
            productList: true,
            products,
            user: req.session.user,
        });
    },
    async showDetail(req, res) {
        const { id } = req.params;
        const product = await getProductById(id); // Lấy sản phẩm theo ID

        if (!product) {
            return res.status(404).send("Product not found");
        }

        res.render("productDetail", { product, user: req.session.user });
    },

    async destroy(req, res) {
        //xóa session
        req.session.destroy();
        res.redirect("/");
    },
};

module.exports = productListController;
