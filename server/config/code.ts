
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
  needMissingParameters : {code: 40002, message: "必要参数缺失", key:"needMissingParameters"},
  errorTypeParameters: {code: 40003, message: "参数类型错误", key: "errorTypeParameters"},

  // 50000 [数据库校验产生的错误]
  adminUserIsExist: {code: 50001, message: "该管理员已存在", key: "adminUserIsExist"},
  /* -------------------------  User ------------------------- */
  userIsExist: {code: 50004, message: "该用户已存在", key: "adminUserIsExist"},
  userNotExist: {code: 50005, message: "用户不存在", key: "userNotExist"},
  userIdError: {code: 50006, message: "UID 错误", key: "userIdError"},
  /* -------------------------  Article ------------------------- */
  articleNotExist: {code: 51000, message: "文章不存在", key: "articleNotExist"},
  /* -------------------------  Plan ------------------------- */
  planAddError: {code:52000, message:"健康计划添加失败", key:"planAddError"},
  planUpdateError: {code:52001, message:"健康计划更新失败", key:"planUpdateError"},
}