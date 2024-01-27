import DayData from '../../models/dayData'
import dayjs from "dayjs";
import {Op} from "sequelize";

type healthParams = {
  calorie?: number,
  sleepTime?: string,
  exerciseTime?: string,
  foods?: string,
  stepNum?: string,
  weight?:string,
}

/**
 * 通过 uid 查询该用户的当日数据
 * @param uid {number} 用户id
 * @return 日数据
 * */
export const getDayDataService = (uid: string | string[]) => {
  let startDay= dayjs().startOf('date').format('YYYY-MM-DD HH:mm:ss')
  let endDay = dayjs().endOf('date').format('YYYY-MM-DD HH:mm:ss')
  return DayData.findOne({
    where: {
      uid: uid,
      is_del: 0,
      created_at: { [Op.between] : [startDay, endDay]}
    },
    attributes: {exclude:["password","is_del"]}
  })
}

/**
 * 通过 uid 指定 time 查询用户某日的数据
 * @param uid {number} 用户id
 * @param time {Date} 时间
 * @return 日数据
 * */
export const getUserDayDataByTimeService = (uid: number, time: Date) => {
  return DayData.findOne({where: {uid: uid, created_at: time, is_del: 0}})
}

/**
 * 传入 uid 与 各类健康参数 创建日数据
 * @param uid {number} 用户id
 * @param params {createParams} 健康参数
 * @return 数据库创建信息
 * */
export const createDayDataService = (uid: number, params: healthParams) => {
  return DayData.create({uid: uid, ...params},)
}

/**
 * 传入 did 与 需要更新的健康参数 修改日数据
 * @param did {number} 数据id
 * @param params {updateParams} 健康参数
 * @return 数据库修改信息
 * */
export const updateDayDataService = (did: number, params: healthParams) => {
  return DayData.update(params, {where: {did: did, is_del: 0}})
}

/**
 * 传入 did 删除对应日数据
 * @param did {number} 数据id
 * @return 数据库修改信息
 * */
export const deleteDayDataService = (did: number) => {
  return DayData.update({is_del: 1}, {where: {did: did, is_del: 0}})
}