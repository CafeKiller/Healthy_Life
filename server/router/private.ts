import koaRouter from 'koa-router'
import { jwtMiddleware } from '../middleware/jwt'
import controllers from '../controller'

const router = new koaRouter()

router.use(jwtMiddleware)

router.get("/test", controllers.test_test.testApi)

export default router