import { DataTypes, Model } from 'sequelize'
import sequelize from '../utils/pool'

class DayData extends Model { }

DayData.init({
  did: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: "数据 主键id"
  },
  uid: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    comment: "数据关联用户id"
  },
  calorie: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "当日数据 卡路里"
  },
  sleepTime: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "当日数据 睡眠时间"
  },
  exerciseTime: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "当日数据 锻炼时间"
  },
  foods: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "当日数据 食物"
  },
  is_del: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    comment: "0:未删除, 1:已删除"
  }
},{
  sequelize,
  modelName: "dayData",
  freezeTableName: true
})

export default DayData