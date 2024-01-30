<template>
  <view class="content" >
    <iframe class='content-iframe' src='https://jiankang.cctv.com/2023/12/18/ARTI2hNZkGTXrG2ybqu1JKOF231218.shtml'></iframe>
  </view>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { article } from '@dcloudio/vue-cli-plugin-uni/packages/postcss/tags'
export default {
  data() {
    return {
      isShow: true,
      img_url_prefix: "http://localhost:9999/project/HL/static/",
      articleList: [],
      inputKey : "请输入相关文章关键字",
    }
  },
}
</script>

<style scoped>
@import "./style/index.scss";
</style>
