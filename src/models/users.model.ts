// import { Sequelize } from "sequelize";

import { DataTypes } from "sequelize";
import { sequelize } from "../dataSource";
export const userModel = () => 
    sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })