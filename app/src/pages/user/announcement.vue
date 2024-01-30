<template>
  <view class="content">
    <div class='anno-list'>
      <div class='anno-item'>
        <div class='title'> <span class='icon'></span> V1.0.3更新公告 <span class='iconfont icon-gonggao'></span></div>
        <div class='text'>
          - NEW: 文章添加模糊检索功能 <br>
          - NEW: 增强食物识别<br>
          - BUG: 修复数据上传校验问题<br>
          - BUG: 修改部分文本<br>
          - BUG: 部分遗留问题<br>
        </div>
        <div class='bottom'>
          <div>发布时间: 2024_01_28</div>
          <div>管理员</div>
        </div>
      </div>
      <div class='anno-item'>
        <div class='title'> <span class='icon red'></span> 1月26日BUG修复 <span class='iconfont icon-gonggao'></span></div>
        <div class='text'>
          - BUG: Do laboris proident eu cillum laborum ea laboris consectetur ea. Aute do proident excepteur aliqua culpa minim officia.  <br>
        </div>
        <div class='bottom'>
          <div>发布时间: 2024_01_26</div>
          <div>管理员</div>
        </div>
      </div>
    </div>
  </view>
</template>

<script>

import { mapMutations, mapState } from 'vuex'
import DialogDayData  from "@/components/dialog/dialogDayData.vue"
export default {
  name:"index",
  data() {
    return {
      isShow:false
    }
  },
}
</script>

<style>
@import "./style/index.scss";
</style>
