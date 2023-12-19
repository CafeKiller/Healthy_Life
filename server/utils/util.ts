import { Context } from 'vm'
import jwt, { Jwt } from 'jsonwebtoken'
import { JWT } from '../config/constant'



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

/**
 * @description: 获取客户端ip地址
 * @param ctx {Context} : 上下文对象
 * @return ipAddr {string} : ip地址字符串
 * */
export const getClientIPAddress = (ctx: Context):string => {
  const  headers = ctx.headers

  if (headers["x-forwarded-for"]) {
    const ipList:string = headers["x-forwarded-for"].split(",")
    return ipList
  }
  return "0.0.0.0"
}

/**
 * @description: 解析token获取userid
 * @param token {string} : token
 * @return number/string
 * */
export const decodeToken = (token: string) => {
  let jwtInfo = jwt.verify(token, JWT.secret) as any
  try {
    return jwtInfo.userId as number
  } catch (err) {
    return  "token不合法"
  }
}

/**
 * @description: 根据userId生成token
 * @param userId {number} : userid
 * @return token
 * */
export const generatorToken = (userId: number): string => {
  return jwt.sign( {userId}, JWT.secret, { expiresIn: JWT.expires })
}