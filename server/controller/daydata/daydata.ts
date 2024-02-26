import {Context, Next} from "koa";
import {CODE} from "../../config/code";
import { createDayDataService, getDayDataService, updateDayDataService } from '../../services/data/data'

/**
 * 添加一条每日数据, 需要传入用户的id, 和收集的数据
 * 注意数据可以不完整, 但不允许一个有效数据都没有
 * 添加完成后会返回该条数据
 * */
export const addDayData = async (ctx: Context, next: Next) => {

    let {uid, ...params} = ctx.request.query
    if (!uid) throw CODE.needMissingParameters
    if (isNaN(Number(uid))) throw CODE.errorTypeParameters
    if (JSON.stringify(params) === "{}") throw CODE.missingParameters

    let result = await createDayDataService(Number(uid), params)

    ctx.body = result?.dataValues

    return next()

}

/**
 * 获取用户当日的数据, 需要传入uid
 * */
export const getCurrentDayData = async (ctx: Context, next: Next) => {

    let {uid} = ctx.request.query
    if (!uid) throw CODE.needMissingParameters
    if (isNaN(Number(uid))) throw CODE.errorTypeParameters


    let result = await getDayDataService(uid)
    ctx.body = result?.dataValues

    return next()
}

/**
 * 更新用户当日数据信息
 * */
export const updateCurrentDayData = async (ctx: Context, next: Next) => {
    let {did, ...params} = ctx.request.query
    if (!did) throw CODE.needMissingParameters
    if (isNaN(Number(did))) throw CODE.errorTypeParameters

    let result = await updateDayDataService(did, params)

    ctx.body = { result }

    return next()
}

// TODO 获取最近七天的睡眠数据

// TODO 获取昨日与今日的体重数据(计算后)