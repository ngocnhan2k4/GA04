const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "freedb_productBTV",
    "freedb_productBTVN",
    "w5RXf#XsmdQ#XC4",
    {
        host: "sql.freedb.tech", // Địa chỉ host của MySQL
        dialect: "mysql", // Chọn dialect cho MySQL
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
