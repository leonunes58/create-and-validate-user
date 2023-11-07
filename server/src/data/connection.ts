import { Sequelize } from "sequelize";

const connection = new Sequelize(`validate_user`, "root", "", {
  port: 3307,
  dialect: "mysql",
  logging: false
});
export default connection;