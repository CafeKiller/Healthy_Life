import Koa from 'koa'
import { CODE } from '../config/code'
import { logger } from '../log/log'

// 该中间件主要用于ctx.result的内容今夕最终封装, 并返回给客户端
export const responseHandler = (ctx: Koa.Context) => {
  if (ctx.request.body !== undefined) {
    ctx.type = "json"
    ctx.body = {
      code: CODE.success.code,
      data: ctx.body,
      message: CODE.success.message
    }
  }
}

// 该中间件主要用用于处理其他中间件出现的异常, 在next()后进行异常捕获, 出现异常后直接由该中间件进行处理
export const errorHandler = (ctx: Koa.Context, next: Koa.Next) => {
  return next().catch((err) => {
    if (typeof err === "object") {
      ctx.body = {
        code: err.code,
        data: null,
        message: err.message
      }
    } else {
      ctx.body = {
        code: -1,
        data: null,
        message: err
      }
    }

    logger.error(err)
    // 保证返回值200
    ctx.status = 200
    return Promise.resolve()
  })
}