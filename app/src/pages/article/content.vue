<template>
  <view class="content" >
    <iframe class='content-iframe' :src='textUrl'></iframe>
  </view>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { article } from '@dcloudio/vue-cli-plugin-uni/packages/postcss/tags'
export default {
  data() {
    return {
      isShow: true,
      textUrl: "https://jiankang.cctv.com/2023/12/18/ARTI2hNZkGTXrG2ybqu1JKOF231218.shtml"
    }
  },
  onLoad(query) {
    // 通过传入的消息修改页面参数
    this.textUrl = query.contUrl
    uni.setNavigationBarTitle({
      title:query.title ? query.title : "健康文章"
    })
  }
}
</script>

<style scoped>
@import "./style/index.scss";
</style>
