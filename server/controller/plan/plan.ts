import {Context, Next} from "koa";
import {CODE} from "../../config/code";
import {getUserInfosService} from "../../services/user/user";
import { addPlanDataByUid, getPlanDataByUid, updatePlanDataByUid } from '../../services/plan/plan'

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


/**
 * @description 设置用户当前的健康计划单, 如果检查到当前用户没有计划表, 则创建一个新计划表, 如果用户当前拥有计划表,则对该计划表进行更新
 *
 * */
export const setPlanDataApi = async (ctx: Context, next: Next) => {

    let { uid, ...params} = ctx.request.body
    if (!uid) throw CODE.needMissingParameters

    let result = await getUserInfosService(uid)
    if(!result) throw CODE.userNotExist
    result =  await getPlanDataByUid(uid)
    if(!result) {
        let createResult =  await addPlanDataByUid(uid, {...params})
        if (!createResult) throw CODE.planAddError
        ctx.body = createResult.dataValues
    } else {
        let updateResult =  await  updatePlanDataByUid(uid, {...params})
        if (!updateResult) throw  CODE.planUpdateError
        ctx.body = updateResult
    }
    
    return next()
}