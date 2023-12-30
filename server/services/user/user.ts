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
  account?: string,
  user_name?: string,
  password?: string,
  age?: number,
  sex?: string,
  height?: string,
  weight?: string,
  user_tag?: Array<string>,
  is_del?: boolean
}

/**
 * 通过 uid 查询一位用户基本信息
 * @param uid {number} 用户id
 * @return 用户信息 (但排除用户密码)
 * */
export const getUserInfosService = (uid: number) => {
  return NormalUser.findOne({where: {uid: uid}, attributes: {exclude:["password"]}})
}

/**
 * 通过 account 查询一位用户基本信息, 常用于判断用户是否已存在(防止用户冲突)
 * @param account {string} 用户账户
 * @return 用户信息
 * */
export const getUserInfoUserNameService = (account: string) => {
  return NormalUser.findOne( {where: {account: account}} )
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
  return NormalUser.update(updateInfo, {where: {uid: uid}})
}
