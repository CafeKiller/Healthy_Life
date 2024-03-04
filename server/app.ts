import http from "http"
import Koa from "koa"
import { loggerMiddleware } from './log/log'
import koaBody from 'koa-body'
import { errorHandler, responseHandler } from './middleware/response'
import { FIXED_KEY, NGINX_STATIC_PATH} from './config/constant'
import { getIPAddress } from './utils/util'
import { privateRouter, publicRouter } from './router'
import fs from 'fs';

// 创建 Koa 容器对象
const app = new Koa()

// 设置上传文件保存的目录
const uploadDir = NGINX_STATIC_PATH.uploadPath;
// 创建上传文件保存目录
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// 使用日志中间件
app.use(loggerMiddleware)
// 使用异常处理中间件
app.use(errorHandler)
// 开启body解析, 开启文件上传
app.use(koaBody(
  {
    multipart: true,
    formidable: {
      uploadDir: uploadDir,
      keepExtensions: true,
    }
  }))

app.use(publicRouter.routes()).use(publicRouter.allowedMethods())
app.use(privateRouter.routes()).use(privateRouter.allowedMethods())

app.use(responseHandler)

// 使用 koaBody 中间件处理文件上传
app.use(koaBody({
  multipart: true,

}));

// 获取端口号
const port = FIXED_KEY.port
// 创建服务
const server = http.createServer(app.callback())
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