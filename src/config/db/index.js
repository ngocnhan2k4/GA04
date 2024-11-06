const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "sql12741852",
    "sql12741852",
    "WYEkbSB41E",
    {
        host: "sql12.freemysqlhosting.net", // Địa chỉ host của MySQL
        dialect: "mysql", // Chọn dialect cho MySQL
        dialectModule: require('mysql2'),
        logging: false, // Tắt logging SQL (tuỳ chọn)
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });

module.exports = sequelize;
