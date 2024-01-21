import { Context, Next } from 'koa'
import { CODE } from '../../config/code'
import {
  getArticleInfoByAidService,
  getArticleInfoListByTitleService,
  getArticleList
} from '../../services/article/article'

/**
 * 获取文章API 需要传入aid, 需保证aid不为空, 同时类型正确
 * */
export const getArticleByAidApi = async (ctx: Context, next: Next) => {

  let {aid } = ctx.request.query
  if (!aid) throw CODE.needMissingParameters

  let result = await getArticleInfoByAidService(Number(aid))
  if (!result) throw CODE.articleNotExist

  ctx.body = result.dataValues
  return next()
}

/**
 * 使用文章标题进行模糊查询API
 * */
export const getArticleByTitleListApi = async (ctx: Context, next: Next) => {
  let { title } = ctx.params
  if (!title) throw CODE.needMissingParameters

  let result = await getArticleInfoListByTitleService(title)
  if (!result) throw CODE.articleNotExist

  ctx.body = { result }

  return next()
}

/**
 * 获取所有文章api
 * */
export const getArticleListApi = async (ctx: Context, next: Next) => {

  let result = await getArticleList()
  if (!result) throw CODE.articleNotExist
  ctx.body = { result }

  return next()
}