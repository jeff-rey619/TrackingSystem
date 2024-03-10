import { Sequelize } from "sequelize";
import { userModel } from "./models/users.model";

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite'
},);


