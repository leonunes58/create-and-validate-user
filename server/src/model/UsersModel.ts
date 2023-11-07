import { DataTypes, Model, Sequelize } from "sequelize";

export class User extends Model {
    declare uuid: string;
    declare name: string;
    declare password: string;
    declare role: string
}

User.init(
    {
        id: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        }
    },
    {
        tableName: "users",
        Sequelize
    }
)
