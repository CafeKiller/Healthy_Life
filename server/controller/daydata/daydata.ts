import {Context, Next} from "koa";
import {CODE} from "../../config/code";
import {createDayDataService, getDayDataService} from "../../services/data/data";
import dayjs from "dayjs";

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
    console.log("uid",uid)
    if (!uid) throw CODE.needMissingParameters
    if (isNaN(Number(uid))) throw CODE.errorTypeParameters


    let result = await getDayDataService(uid)
    ctx.body = result?.dataValues

    return next()
}