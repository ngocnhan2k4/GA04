const sequelize = require("../../config/db");
const { DataTypes } = require("sequelize");
const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        user_password: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
    },
    {
        tableName: "users",
        timestamps: false,
    }
);

module.exports = User;
