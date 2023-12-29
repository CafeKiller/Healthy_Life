
import log4js from "log4js"
import Koa from 'koa'
import { getClientIPAddress } from '../utils/util'

log4js.configure( {
  pm2: true,
  appenders: {
    everything: {
      type: "dateFile",
      filename: __dirname + "/all-the-logs.log",
      maxLogSize: "10M",
      backups: 20
    }
  },
  categories: {
    default: {
      appenders: ["everything"],
      level: "debug"
    }
  }
})


export const logger = log4js.getLogger()

export const loggerMiddleware = async (ctx: Koa.Context, next: Koa.Next) => {
  const start:Date = new Date()
  await next()
  const ms:number = Number(new Date()) - Number(start)
  const remoteAddress = getClientIPAddress(ctx)
  let logText =
    `${ctx.method} ${ctx.status} 
      请求参数: ${JSON.stringify( ctx.request.body )} 
      响应参数: ${JSON.stringify(ctx.body)} - ${remoteAddress} - ${ms}ms`
  logger.info(logText)

}