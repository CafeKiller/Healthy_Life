import http from "http"
import Koa from "koa"
import { loggerMiddleware } from './log/log'
import koaBody from 'koa-body'
import { errorHandler, responseHandler } from './middleware/response'
import { FIXED_KEY } from './config/constant'
import { getIPAddress } from './utils/util'
import { privateRouter, publicRouter } from './router'

// 创建 Koa 容器对象
const app = new Koa()

// 使用日志中间件
app.use(loggerMiddleware)
// 使用异常处理中间件
app.use(errorHandler)
// 开启body解析
app.use(koaBody({multipart: true}))

app.use(publicRouter.routes()).use(publicRouter.allowedMethods())
app.use(privateRouter.routes()).use(privateRouter.allowedMethods())

app.use(responseHandler)

// 获取端口号
const port = FIXED_KEY.port
// 创建服务
const server = http.createServer(app.callback)
// 服务监听端口
server.listen(port)

// 绑定异常处理
server.on("error", (err)=> {
  console.error(err)
})

// 绑定监听处理
server.on("listening", () => {
  const ip = getIPAddress()
  const address = `http://${ip}:${port}`
  const localAddress = `http://localhost:${port}`
  console.log(`app started at address \n\n${localAddress} \n\n${address}`)
})