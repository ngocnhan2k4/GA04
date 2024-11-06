const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const route = require("./routers");
const session = require("express-session");
const port = 3000;

app.use(express.static("./src/public"));
app.use(
    session({
        secret: "ProductBTVN", // Khóa bí mật để mã hóa session
        resave: true, // Không lưu lại session nếu chưa thay đổi
        saveUninitialized: true, // Lưu session mới ngay cả khi chưa được khởi tạo
        cookie: { secure: false }, // Chỉ sử dụng secure=true nếu bạn dùng HTTPS
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


module.exports = (req, res) => {
    app(req, res); // Vercel gọi hàm này để xử lý yêu cầu
  };