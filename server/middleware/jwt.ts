import Koa from 'koa'
import { decodeToken } from '../utils/util'
import { CODE } from '../config/code'

export const jwtMiddlewareDeal = async (ctx: Koa.Context, next:Koa.Next) => {
  const token = ctx.request.headers.token
  if (typeof token === "string") {
    try {
      let userId = decodeToken(token)
      console.log(userId)
    } catch (err) {
      throw CODE.tokenFailed
    }
  } else {
    throw CODE.tokenFailed
  }
  return next()
}