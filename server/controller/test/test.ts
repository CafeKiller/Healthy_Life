import { Context, Next } from 'koa'

export const testApi = (ctx: Context, next: Next) => {
  ctx.body = {
    userId: ctx.userId,
    userInfo: ctx.userInfo
  }
  return next()
}