import http from "http"
import Koa from "koa"

// 创建 Koa 容器对象
const app = new Koa()

// 获取端口号
const port = 8888

// 创建服务
const server = http.createServer(app.callback)
// 服务监听端口
server.listen(port)

server.on("error", (err)=> {
  console.error(err)
})