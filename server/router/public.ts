import koaRouter from "koa-router"
import controllers from '../controller'
import controller from '../controller'
import { updatePasswordApi } from '../controller/admin/user/user'

const router  = new koaRouter()

const project = {
  admin: "/admin"
}

// 注册用户
router.post(project.admin + "/user/register", controllers.admin_user_user.registerUserApi)

// 用户登录
router.post(project.admin + "/user/login", controller.admin_user_user.userLoginApi)

// 忘记密码(修改密码)
router.post(project.admin + "/user/updatePassword", controllers.admin_user_user.updatePasswordApi)

// 删除用户
router.post(project.admin + "/user/delete", controllers.admin_user_user.deleteUserApi)

export default router