import Plan from "../../models/plan";

type updatePlanDataType = {
    bloodPressure?: string,
    bmi?: string,
    weight?: string,
    heartRate?: string,
    calorie?: string,
    kilometre?: string
}

/**
 * @description 通过uid获取用户的健康计划
 * @param uid 用户uid
 * */
export const getPlanDataByUid = (uid: number) => {
    return Plan.findOne({where: {uid: uid, is_del: "0" }})
}

/**
 * @description 通过uid来修改用户的健康计划
 * @param uid 用户uid
 * @param params 各类健康参数
 * */
export const updatePlanDataByUid = (uid: number, params: updatePlanDataType) => {
    return Plan.update({...params}, {where: {uid: uid, is_del: "0"}})
}

/**
 * @description 通过uid删除对用用户的健康计划
 * @param uid 用户uid
 * */
export const removeUserPlanData = (uid: number) => {
    return Plan.update({is_del:"1"}, { where: {uid: uid, is_del: "0"} })
}