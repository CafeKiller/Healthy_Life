
// type code_type =
//   any : {
//     code: number,
//     message: string,
//     key: string
//   }

export const CODE = {
  success: {code: 0, message: "success", key: "success"},
  tokenFailed: {code: 1, message: "token校验失败", key: "tokenFailed"},
  missingParameters: {code: 2, message: "参数缺失", key: "missingParameters"},
  adminUserIsExist: {code: 3, message: "账户名已存在", key: "adminUserIsExist"}
}