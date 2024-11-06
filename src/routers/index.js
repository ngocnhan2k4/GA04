const productListRouter = require("./productList");
const SignupRouter = require("./signup.js");
const LoginRouter = require("./login");
function route(app) {
    app.use("/login", LoginRouter);
    app.use("/signup", SignupRouter);
    app.use("/", productListRouter);
}

module.exports = route;