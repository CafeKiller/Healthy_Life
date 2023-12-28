import { DataTypes, Model } from 'sequelize'
import sequelize from '../utils/pool'

class AdminUser extends Model{}

AdminUser.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: "主键ID",
  },
  account: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "账号"
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "密码"
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "头像"
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Token"
  }
}, {
  sequelize,
  modelName:"adminUser",
  freezeTableName: true
})

export default AdminUser