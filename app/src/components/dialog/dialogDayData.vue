<template>
  <div class='dialog'>
    <div class='content dialog-day-data'>
      <div class='title'>今日数据更新</div>
      <div class='data-cont'>
        <div class='header'>
          <div class='col left'>当日</div>
          <div class='col right'>规划</div>
        </div>
        <div class='data-list'>
          <div class='data-item'>
            <input class='col left' type='number' placeholder='今日体重' v-model='day_data.weight'></input>
            <div class='col right'>60KG</div>
          </div>
          <div class='data-item'>
            <input class='col left' type='number'  v-model='day_data.calorie' placeholder='今日卡路里摄入'></input>
            <div class='col right'>2000卡</div>
          </div>
          <div class='data-item'>
            <input class='col left' type='number' placeholder='今日运动步数' v-model='day_data.step_num'></input>
            <div class='col right'>10000步</div>
          </div>
          <div class='data-item'>
            <input class='col left' type='number' placeholder='今日有氧运动分钟' v-model='day_data.exercise_time'></input>
            <div class='col right'>40min</div>
          </div>
          <div class='data-item'>
            <input class='col left' placeholder='今日睡眠时长' v-model='day_data.sleep_time'></input>
            <div class='col right'>7:40</div>
          </div>
        </div>
        <div class='update-btn' @tap.stop='updateDayDate'>UPDATE</div>
        <div class='tips-list'>
          <div class='tips'>* 规划数据只作展示, 不可以在当前页面进行修改</div>
          <div class='tips'>* 睡眠时间请输入 XX:XX 的格式</div>
          <div class='tips color'>* 数据直接输入数值即可, 可以不用输入单位</div>
          <div class='tips color'>* 食物可以直接输入食物名, 会自动转换为卡路里量</div>
        </div>
      </div>
      <div class='btn-close iconfont icon-cha' @tap.stop='closeDialog()'></div>
    </div>
  </div>
</template>

<script>
import { Notify } from 'vant';
import { mapMutations, mapState } from 'vuex'

export default {
  name:"DialogDayData",
  props:["isShowCommonDialog"],
  data() {
    return {
      day_data:{
        calorie: null,
        sleep_time: null,
        step_num: null,
        exercise_time: null,
        foods: null,
        weight: 0,
      }
    }
  },
  computed:{
    ...mapState(["user","currentData"])
  },
  created(){
    if (this.currentData.did) {
      this.day_data.calorie = this.currentData.calorie
      this.day_data.step_num = this.currentData.stepNum
      this.day_data.sleep_time = this.currentData.sleepTime
      this.day_data.exercise_time = this.currentData.exerciseTime
      this.day_data.foods = this.currentData.foods
      this.day_data.weight = this.currentData.weight
    }
  },
  methods:{
    ...mapMutations(["setCurrentData"]),
    /**
     * 关闭每日数据弹窗组件显示
     * */
    closeDialog(){
      if (JSON.stringify(this.currentData) !== "{}") {
        this.$emit("UpdateDialogDayDataState", !this.isShowCommonDialog)
        return
      }
      Notify({ type: 'warning', message: '今日的数据还没有更新哦' });
    },
    /* 处理更新按钮函数 */
    handleUpdateBtn(){

    },
    /* 创建数据 */
    updateDayDate(){
      if (this.inspectDayData()) {
        this.disposeDayData()
        uni.request({
          method:"GET",
          url:`/api/data/add?uid=${this.user.uid}&calorie=${this.day_data.calorie}&sleepTime=${this.day_data.sleep_time}&stepNum=${this.day_data.step_num}&exerciseTime=${this.day_data.exercise_time}&weight=${this.day_data.weight}`,
          header:{
            "token": this.user.token
          },
          success:(res)=>{
            if(res.data.data) {
              this.setCurrentData(res.data.data)
              uni.showToast({
                title: "数据上传成功",
                icon: "success"
              })
            }
          }
        })
      }

    },
    /**
     * 校验需要上传的每日数据格式的合法性
     * */
    inspectDayData(){
      if (!/^((1|0?)[0-9]|2[0-3]):([0-5][0-9])/.test(this.day_data.sleep_time)) {
        uni.showToast({
          title:"请输入合法的睡眠时间格式",
          icon:"error"
        })
        return false
      }
      return true
    },
    /**
     * 处理需要上传的每日数据格式
     * */
    disposeDayData(){
      if (!this.day_data.calorie) {
        this.day_data.calorie = 0
      }
      if (!this.day_data.step_num) {
        this.day_data.step_num = 0
      }
    }
  },
}
</script>

<style scoped>
@import "./style/dialog.scss";
</style>