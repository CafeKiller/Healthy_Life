
// type code_type =
//   any : {
//     code: number,
//     message: string,
//     key: string
//   }

export const CODE = {

  // 20000 [正确]
  success: {code: 20000, message: "SUCCESS", key: "success"},

  // 30000 [ 内部校验产生的错误 ]
  tokenFailed: {code: 30001, message: "token校验失败", key: "tokenFailed"},
  passwordFailed: {code: 30002, message: "用户密码错误", key: "passwordFailed"},

  // 40000 [ 用户行为产生的错误 ]
  missingParameters: {code: 40001, message: "参数缺失", key: "missingParameters"},

  // 50000 [数据库校验产生的错误]
  adminUserIsExist: {code: 50001, message: "该管理员已存在", key: "adminUserIsExist"},
  userIsExist: {code: 50004, message: "该用户已存在", key: "adminUserIsExist"},
  userNotExist: {code: 50005, message: "用户不存在", key: "userNotExist"},
  userIdError: {code: 50006, message: "UID 错误", key: "userIdError"}
}