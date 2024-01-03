import {Context, Next} from "koa";
import {CODE} from "../../config/code";
import {createDayDataService} from "../../services/data/data";

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