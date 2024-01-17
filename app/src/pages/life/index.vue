<template>
    <view class="content">
        <!--头部-->
        <view class="header"></view>
        <!--主体-->
        <view class="wrap">
            <div class="item">
                <view class="title">体重变化</view>
                <view class="iconfont icon-icontz"></view>
            </div>
            <div class="item">
                <view class="title">运动锻炼</view>
                <view class="iconfont icon-shangzhiduanlian"></view>
            </div>
            <div class="item">
                <view class="title">睡眠质量</view>
                <view class="iconfont icon-shuijue"></view>
            </div>
            <div class="item">
                <view class="title">饮食健康</view>
                <view class="iconfont icon-yinshijiankang"></view>
            </div>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: '生活空间'
        }
    },
    onLoad() {

    },
    methods: {

    }
}
</script>

<style scoped>
@import "./style/index.scss";
</style>
