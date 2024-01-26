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
            <input class='col left' placeholder='今日体重' ></input>
            <div class='col right'></div>
          </div>
          <div class='data-item'>
            <input class='col left' type='input' v-model='day_data.calorie' placeholder='今日卡路里摄入'></input>
            <div class='col right'></div>
          </div>
          <div class='data-item'>
            <input class='col left' placeholder='今日运动步数' v-model='day_data.step_num'></input>
            <div class='col right'></div>
          </div>
          <div class='data-item'>
            <input class='col left' placeholder='今日有氧运动分钟' v-model='day_data.exercise_time'></input>
            <div class='col right'></div>
          </div>
          <div class='data-item'>
            <input class='col left' placeholder='今日睡眠时长' v-model='day_data.sleep_time'></input>
            <div class='col right'></div>
          </div>
        </div>
        <div class='update-btn' @tap.stop='updateDayDate'>UPDATE</div>
        <div class='tips-list'>
          <div class='tips'>* 规划数据只作展示, 不可以在当前页面进行修改</div>
          <div class='tips color'>* 数据直接输入数值即可, 可以不用输入单位</div>
          <div class='tips color'>* 食物可以直接输入食物名, 会自动转换为卡路里量</div>
        </div>
      </div>
      <div class='btn-close iconfont icon-cha' @tap.stop='closeDialog()'></div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DialogDayData",
  props:["isShowCommonDialog"],
  data() {
    return {
      day_data:{
        calorie: "",
        sleep_time: "",
        step_num: "",
        exercise_time: "",
        foods:"",
      }
    }
  },
  created(){

  },
  methods:{
    /**
     * 关闭每日数据弹窗组件显示
     * */
    closeDialog(){
      this.$emit("UpdateDialogDayDataState", !this.isShowCommonDialog)
    },
    updateDayDate(){

    },
    /**
     * 处理需要上传的每日数据格式
     * */
    disposeDayData(){

    }
  },
}
</script>

<style scoped>
@import "./style/dialog.scss";
</style>