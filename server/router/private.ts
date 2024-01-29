import koaRouter from 'koa-router'
import { jwtMiddlewareDeal } from '../middleware/jwt'
import controllers from '../controller'


const router = new koaRouter()
const project = {
  admin: "/admin",
  user: "/user",
  data: "/data",
  article: "/article",
  plan: "/plan"
}

// 启动jwt校验
router.use(jwtMiddlewareDeal)

// 测试接口
router.get('/test', controllers.test_test.testApi)

// 普通用户接口
router.post(project.user + "/writeOff", controllers.user_user.removeUserApi)
router.post(project.user + "/update", controllers.user_user.updateUserInfoApi)

// 每日数据接口
router.get(project.data+"/add", controllers.daydata_daydata.addDayData)
router.get(project.data+"/find", controllers.daydata_daydata.getCurrentDayData)

// 健康计划表接口
router.get(project.plan+"/get", controllers.plan_plan.getPlanDataApi)
router.post(project.plan+"/set", controllers.plan_plan.setPlanDataApi)

export default router