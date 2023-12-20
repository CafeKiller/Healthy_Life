import { DATABASE, ENV } from '../config/constant'
import { Sequelize } from 'sequelize'

// 读取配置文件参数, 获得数据库连接参数
const { dbName, user, password, host, port } =
        process.env.NODE_ENV === ENV.production ? DATABASE.production : DATABASE.development

// 创建一个sequelize对象
const sequelize = new Sequelize(dbName, user, password, {
  dialect: "mysql",
  host: host,
  port: port,
  timezone: "+08:00",
  logging: false,
  define: {
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    underscored: true, // 将驼峰命名转换为下划线(_)
  }
})

sequelize.sync({ force: false, alter: true }).then()

sequelize.authenticate()
  .then(()=>{
    console.log("Connection has been established successfully")
  }).catch((err: Error) => {
    console.error(err.message)
  })

export default sequelize