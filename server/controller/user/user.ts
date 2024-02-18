import { Context, Next } from 'koa'
import { CODE } from '../../config/code'
import {
  deleteUserByUidService,
  getUserByAccountService,
  getUserInfosService,
  registerUserService,
  updateUserInfoService
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
  // 确认该账户可以注册再获取前端传入的其余次要参数
  let {sex, age, email, height, weight, user_tag} = ctx.request.body
  let resultUserInfo =  await registerUserService({account, user_name, password, sex, age, email, height, weight, user_tag})
  ctx.body = resultUserInfo.dataValues

  return next()
}

/**
 * 用户登录API, 需要保证account(账户) password(用户密码)不为空, 先通过account获取用户信息,
 * 判断用户是否存在, 确认存在后需要通过uid生成token, 并将token保存至用户信息中
 * */
export const loginApi = async (ctx: Context, next: Next)=>{
  let {account, password} = ctx.request.body
  if (!account || !password) throw CODE.missingParameters

  // 检验用户是否存在
  let userInfo =  await getUserByAccountService(account)
  if (!userInfo) throw CODE.userNotExist

  // 检验密码是否正确
  if (userInfo.dataValues.password !== String(password)) throw CODE.passwordFailed

  let uid = userInfo.dataValues.uid
  let token = generatorToken(uid)
  await updateUserInfoService(uid, {token: token})

  let resultUserInfo =  await getUserInfosService(uid)

  ctx.body = resultUserInfo?.dataValues

  return next()
}

/**
 * 用户账号注销API, 需保证uid不能为空, 需要判断该uid是否不存在
 * 若成功移除则返回 删除数据的数据数
 * */
export const removeUserApi = async (ctx: Context, next: Next)=> {
  if (!ctx.request.body) throw CODE.missingParameters
  let { uid } = ctx.request.body
  if (!uid) throw CODE.missingParameters

  let userInfo = await getUserInfosService(uid)
  if(!userInfo) throw CODE.userIdError

  let result = await deleteUserByUidService(uid)
  ctx.body = {"delete_number": result[0]}

  return next()
}

/**
 * 修改用户信息API (account, is_del除外), 需保证uid不为空, 需要判断该uid是否不存在
 * 若成功移除则返回 修改数据的数据量
 * */
export const updateUserInfoApi = async (ctx: Context, next: Next)=> {
  if (!ctx.request.body) throw CODE.missingParameters
  let {uid, ...params} = ctx.request.body
  if (!uid) throw CODE.needMissingParameters

  let userInfo = await getUserInfosService(uid)
  if(!userInfo) throw CODE.userNotExist

  let result =  await updateUserInfoService(uid, {...params})
  ctx.body = {"update_number": result[0]}

  return next()
}