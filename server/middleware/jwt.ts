import Koa from 'koa'
import { decodeToken } from '../utils/util'
import { CODE } from '../config/code'
import { getUserInfosService } from '../services/user/user'

export const jwtMiddlewareDeal = async (ctx: Koa.Context, next:Koa.Next) => {
  const token = ctx.request.headers.token
  if (typeof token === "string") {
    try {
      let userId = decodeToken(token)
      if (typeof userId === 'string' )  throw CODE.tokenFailed

      let userInfo = await getUserInfosService(userId)
      if (!userInfo) {
        throw CODE.tokenFailed
      } else {
        ctx.userId = userId
        ctx.userInfo = userInfo
      }
    } catch (err) {
      throw CODE.tokenFailed
    }
  } else {
    throw CODE.tokenFailed
  }
  return next()
}