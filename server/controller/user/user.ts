import { Context, Next } from 'koa'
import { CODE } from '../../config/code'
import {
  getUserByAccountService,
  getUserInfosService,
  registerUserService, updateUserInfoService
} from '../../services/user/user'
import { generatorToken } from '../../utils/util'


/**
 * 注册用户API, 需要保证account(账户) user_name(用户名) password(用户密码)不为空
 * 同时还需要对 account 进行额外判断, 检查是否为同一账户反复注册
 * */
export const registerUserApi = async (ctx: Context, next: Next) => {
  let {account, user_name, password} = ctx.request.body
  if (!account || !user_name || !password) {
    throw CODE.missingParameters
  }

  let accountExistInfo =  await getUserByAccountService(account)
  if (accountExistInfo) throw CODE.userIsExist

  let resultUserInfo =  await registerUserService({account, user_name, password})

  ctx.body = resultUserInfo.dataValues

  return next()
}

export const loginApi = async (ctx: Context, next: Next)=>{
  let {account, password} = ctx.request.body
  if (!account || !password) throw CODE.missingParameters

  let userInfo =  await getUserByAccountService(account)
  if (!userInfo) throw CODE.userNotExist

  if (userInfo.dataValues.password !== String(password)) throw CODE.passwordFailed

  let uid = userInfo.dataValues.uid
  let token = generatorToken(uid)
  await updateUserInfoService(uid, {token: token})

  let resultUserInfo =  await getUserInfosService(uid)

  ctx.body = resultUserInfo?.dataValues

  return next()
}
