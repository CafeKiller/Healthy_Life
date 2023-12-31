import { Context, Next } from 'koa'
import { CODE } from '../../config/code'
import { getArticleInfoByAidService } from '../../services/article/article'

/**
 * 获取文章API 需要传入aid, 需保证aid不为空, 同时类型正确
 * */
export const getArticleByAidApi = async (ctx: Context, next: Next) => {

  let {aid } = ctx.request.query
  console.log("aid",aid)
  if (!aid) throw CODE.needMissingParameters

  let result = await getArticleInfoByAidService(Number(aid))
  if (!result) throw CODE.articleNotExist

  ctx.body = result.dataValues
  return next()
}