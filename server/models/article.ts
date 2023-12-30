import { DataTypes, Model } from 'sequelize'
import sequelize from '../utils/pool'

class Article extends Model { }

Article.init({
  aid: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: "用户 主键id"
  },
  type: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    comment: "文章类别: 0原创 1转载 2未知"
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "文章标题"
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "文章内容"
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "佚名",
    comment: "文章作者"
  },
  is_del: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    comment: "0:未删除, 1:已删除"
  }
},{
  sequelize,
  modelName: "article",
  freezeTableName: true
})

export default Article