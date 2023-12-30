import koaRouter from 'koa-router'
import { jwtMiddlewareDeal } from '../middleware/jwt'
import controllers from '../controller'

const router = new koaRouter()
const project = {
  admin: "/admin",
  user: "/user",
  data: "/data",
  article: "/article",
}

// 启动jwt校验
router.use(jwtMiddlewareDeal)

// 测试接口
router.get('/test', controllers.test_test.testApi)

// 普通用户接口
router.post(project.user + "/writeOff", controllers.user_user.removeUserApi)

export default router