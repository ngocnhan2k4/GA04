const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // Đường dẫn tới file kết nối

const product = sequelize.define(
    "product",
    {
        // Định nghĩa các cột tương ứng với bảng trong cơ sở dữ liệu
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "Product", // Tên bảng trong cơ sở dữ liệu
        timestamps: false,
    }
);

module.exports = product;
