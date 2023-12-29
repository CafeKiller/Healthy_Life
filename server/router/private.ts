import koaRouter from 'koa-router'
import { jwtMiddlewareDeal } from '../middleware/jwt'
import controllers from '../controller'

const router = new koaRouter()

router.use(jwtMiddlewareDeal)

router.get('/test', controllers.test_test.testApi)

export default router