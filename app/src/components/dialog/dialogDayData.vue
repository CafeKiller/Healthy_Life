<template>
  <div class='dialog'>
    <div class='content dialog-day-data'>
      <div class='title'>今日数据更新</div>
      <div class='data-list'>
        <div class='data-item header'>
          <div class='col left'>当日</div>
          <div class='col right'>规划</div>
        </div>
        <div class='data-item'></div>
        <div class='data-item'></div>
        <div class='data-item'></div>
        <div class='data-item'></div>
      </div>
      <div class='btn-close iconfont icon-cha' @tap.stop='closeDialog()'></div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DialogDayData",
  props:["isShowCommonDialog"],
  created(){

  },
  methods:{
    /**
     * 关闭每日数据弹窗组件显示
     * */
    closeDialog(){
      this.$emit("UpdateDialogDayDataState", !this.isShowCommonDialog)
    }
  },
}
</script>

<style scoped>
@import "./style/dialog.scss";
</style>