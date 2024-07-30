import Koa from 'koa'
import { decodeToken, verifyJWTToken } from '../utils/util'
import { CODE } from '../config/code'
import { getUserInfosService } from '../services/user/user'
import { JWT } from '../config/constant'
import jwt from 'jsonwebtoken'

// jwt校验
export const jwtMiddlewareDeal = async (ctx: Koa.Context, next:Koa.Next) => {
  // 获取用户token
  const token = ctx.request.headers.token

  if (typeof token === "string") {
    try {

      // 验证token
      const decoded = verifyJWTToken(token, JWT.secret) as jwt.JwtPayload

      // 解析用户token
      let userId = decoded.userid

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