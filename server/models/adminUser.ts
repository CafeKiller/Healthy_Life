import { DataTypes, Model } from 'sequelize'
import sequelize from '../utils/pool'

class AdminUser extends Model { }

AdminUser.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: "管理员 主键ID",
  },
  account: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "管理员 账号"
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "管理员 密码"
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "管理员 头像"
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "管理员 权限等级"
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Token"
  },
  is_del: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: "0",
    comment: "0:未删除, 1:已删除"
  }
}, {
  sequelize,
  modelName:"adminUser",
  freezeTableName: true
})

export default AdminUser