// import { Context } from 'vm'
// import jwt from "jsonwebtoken"

/**
 * @description: 获取当前服务的ip地址
 * @return
 * */
export const getIPAddress = () => {
  const interfaces = require("os").networkInterfaces()
  for (const devName in interfaces) {
    const temp = interfaces[devName]
    for (let i = 0; i < temp?.length; i++) {
      const alias = temp[i]
      if (alias.family === "IPv4" && alias.address !== '127.0.0.1' && !alias.internal){
        return alias.address
      }
    }
  }
}