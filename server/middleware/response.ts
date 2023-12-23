import Koa from 'koa'
import { CODE } from '../config/code'

export const responseHandler = (ctx: Koa.Context) => {
  if (ctx.body !== undefined) {
    ctx.type = "json"
    ctx.body = {
      code: CODE.success.code,
      data: ctx.body,
      message: CODE.success.message
    }
  }
}