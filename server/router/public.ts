import koaRouter from "koa-router"
import controllers from '../controller'
import controller from '../controller'

const router  = new koaRouter()

const project = {
  admin: "/admin",
  user: "/user",
  data: "/data",
  article: "/article",
}

// 管理员用户
router.post(project.admin + "/user/register", controllers.admin_user_user.registerUserApi)
router.post(project.admin + "/user/login", controller.admin_user_user.userLoginApi)
router.post(project.admin + "/user/updatePassword", controllers.admin_user_user.updatePasswordApi)
router.post(project.admin + "/user/delete", controllers.admin_user_user.deleteUserApi)

// 普通用户
router.post(project.user+"/register", controllers.user_user.registerUserApi)
router.post(project.user+"/login", controllers.user_user.loginApi)

// 文章
router.get(project.article+"/all", controllers.article_article.getArticleListApi)
router.get(project.article+"/find", controllers.article_article.getArticleByAidApi)
router.get(project.article+"/title/:title", controllers.article_article.getArticleByTitleListApi)

export default router