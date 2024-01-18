import { DataTypes, Model } from 'sequelize'
import sequelize from '../utils/pool'

class Plan extends Model { }

Plan.init({
    pid: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: "目标计划 主键id"
    },
    uid: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        comment: "目标计划 对应UID"
    },
    bloodPressure: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "目标计划 血压"
    },
    bmi: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "目标计划 BMI"
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "目标计划 体重"
    },
    heartRate: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "目标计划 心率"
    },
    calorie: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "目标计划 卡路里"
    },
    kilometre: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "目标计划 公里"
    },
    is_del: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        comment: "0:未删除, 1:已删除"
    }
},{
    sequelize,
    modelName: "plan",
    freezeTableName: true
})

export default Plan