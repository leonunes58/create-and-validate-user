import { Sequelize } from "sequelize-typescript"
const connection = new Sequelize({
    database: 'validate_user',
    dialect: 'mysql',
    username: 'root',
    password: '',
    storage: ':memory:',
    models: [__dirname + '/model'], 
    validateOnly: true
  });
export default connection;