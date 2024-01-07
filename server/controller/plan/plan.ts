import {Context, Next} from "koa";
import {CODE} from "../../config/code";
import {getUserInfosService} from "../../services/user/user";
import {getPlanDataByUid} from "../../services/plan/plan";

/**
 * @description 获取用户的健康计划数据
 * */
export const getPlanDataApi = async (ctx: Context, next: Next) => {

    let { uid }  = ctx.request.body
    if (!uid) throw CODE.needMissingParameters

    let resultUser = await getUserInfosService(uid)
    if (!resultUser) throw CODE.userNotExist

    let result = await getPlanDataByUid(uid)

    ctx.body = result?.dataValues

    return next()
}