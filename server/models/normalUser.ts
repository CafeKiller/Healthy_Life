import { DataTypes, Model } from 'sequelize'
import sequelize from '../utils/pool'

class NormalUser extends Model { }

NormalUser.init({
  uid: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: "用户 主键id"
  },
  account: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "用户账户"
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "用户名"
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "用户密码"
  },
  email : {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "用户邮箱"
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    comment: "用户年龄"
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "用户性别"
  },
  height: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "用户身高"
  },
  weight: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "用户体重"
  },
  user_tag: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "用户特征Tag",
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "用户 Token",
  },
  is_del: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    comment: "0:未删除, 1:已删除"
  }
},{
  sequelize,
  modelName: "normalUser",
  freezeTableName: true
})

export default NormalUser