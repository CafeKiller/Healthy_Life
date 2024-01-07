import NormalUser from '../../models/normalUser'

type registerParams = {
  account: string,
  user_name: string,
  password: string,
  age?: number,
  sex?: string,
  height?: string,
  weight?: string,
  user_tag?: Array<string>,
}

type updateParams = {
  user_name?: string,
  password?: string,
  email?: string,
  age?: number,
  sex?: string,
  height?: string,
  weight?: string,
  user_tag?: Array<string>,
  token?: string,
}

/**
 * 通过 uid 查询一位用户基本信息
 * @param uid {number} 用户id
 * @return 用户信息 (但排除用户密码)
 * */
export const getUserInfosService = (uid: number) => {
  return NormalUser.findOne({where: {uid: uid,  is_del: 0}, attributes: {exclude:["password","is_del"]}})
}

/**
 * 通过 account 查询一位用户基本信息, 常用于判断用户是否已存在(防止用户冲突) 或者 用户登录
 * @param account {string} 用户账户
 * @return 用户信息
 * */
export const getUserByAccountService = (account: string) => {
  return NormalUser.findOne( {where: {account: account, is_del: 0}} )
}

/**
 * 注册用户 (其中 account, user_name, password 是必须参数)
 * @param params {registerParams} 注册用户信息
 * @return 数据库创建信息
 * */
export const registerUserService = (params: registerParams) => {
  return NormalUser.create({...params})
}

/**
 * 传入新参数, 通过 uid 修改用户信息
 * @param uid {number} 用户id
 * @param updateInfo {updateParams} 用户修改信息
 * @return 数据库修改信息
 * */
export const updateUserInfoService = (uid: number, updateInfo: updateParams) => {
  return NormalUser.update(updateInfo, {where: {uid: uid, is_del: 0}})
}

/**
 * 通过 uid 修改用户删除状态 (非真实删除)
 * @param uid {number} 用户id
 * @return 数据库修改信息
 * */
export const deleteUserByUidService = (uid:number) => {
  return NormalUser.update({is_del: 1}, {where: {uid: uid}})
}