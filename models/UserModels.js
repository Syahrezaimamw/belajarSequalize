import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Transaksi from "./TransaksiModels.js";
const User = db.define(
    'User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    telephone:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    
},
{
    tableName:'user'
}
)

User.hasMany(Transaksi,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

Transaksi.belongsTo(User,{
    foreignKey: 'UserId',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})



export default User