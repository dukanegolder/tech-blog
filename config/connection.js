const Sequilize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_url) {
  sequelize = new Sequilize(process.env.JAWSDB_url);
} else {
  sequelize = new Sequilize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3000,
    }
  );
}

module.exports = sequelize;
