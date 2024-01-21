import Article from '../../models/article'
import { Op } from 'sequelize'

/**
 * 通过 aid 查询文章
 * @param aid {number} 文章id
 * @return 文章信息
 * */
export const getArticleInfoByAidService = (aid: number) => {
  return Article.findOne({where: {aid: aid, is_del: 0} })
}

/**
 * 通过 title 标题对文章进行模糊查询
 * @param title {string} 文章标题(支持模糊查询)
 * @return 文章集合信息
 * */
export const getArticleInfoListByTitleService = (title: string) => {
  return Article.findAll({where: { title: { [Op.like] : `%${title}%`}, is_del: 0}})
}

/**
 * 查询所有文章
 * */
export const getArticleList = () => {
  return Article.findAll({where: {is_del: 0}})
}

/**
 * 通过 author 查询该作者的所有文章
 * @param author {string} 文章作者
 * @return 文章集合信息
 * */
export const getArticleInfoListByAuthorService = (author: string) => {
  return Article.findAll({where: {author: author, is_del: 0}})
}
