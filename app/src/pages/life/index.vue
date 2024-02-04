<template>
    <view class="content">
        <!--头部-->
        <view class="header">
            <view class="tips">当前综合数据评分</view>
            <view class="mark">76 <span>分</span></view>
            <view class="desc">
                <span>评价</span> <br>
                <p>当前评分中等, 主要需要改善的地方有体重问题和睡眠问题,
                    建议饭后多运动, 晚上尽量在11点前入睡</p>
            </view>
        </view>
        <view class="nav">
            <view class="item active">周报</view>
            <view class="item">月报</view>
            <view class="item">年报</view>
        </view>
        <!--主体-->
        <view class="wrap">
            <view class="header-tips">点击下列一项即可生成对用报告哦~</view>
            <div class="item">
                <view class="title">体重变化</view>
                <view class="iconfont icon-icontz"></view>
                <view class="desc">
                    最近一周 <br>
                    <span class="state down">下降了</span> <br>
                    <span class="data">1.1KG</span>
                    <view class="tips">需要再接再厉呀</view>
                </view>
            </div>
            <div class="item">
                <view class="title">运动锻炼</view>
                <view class="iconfont icon-shangzhiduanlian"></view>
                <view class="desc">
                    最近一周 <br>
                    <span class="state down">增长了</span> <br>
                    <span class="data">22分钟</span>
                    <view class="tips"></view>
                    <view class="tips">运动过后记得及时放松哦</view>
                </view>
            </div>
            <div class="item">
                <view class="title">睡眠质量</view>
                <view class="iconfont icon-shuijue"></view>
                <view class="desc">
                    最近一周 <br>
                    <span class="state up">减少了</span>  <br>
                    <span class="data">11分钟</span>
                    <view class="tips">需要注意改善睡眠质量</view>
                </view>
            </div>
            <div class="item">
                <view class="title">饮食健康</view>
                <view class="iconfont icon-yinshijiankang"></view>
                <view class="desc">
                    最近一周 <br>
                    <span class="state down">增加了</span>  <br>
                    <span class="data">200卡</span>
                    <view class="tips">锻炼期间记得合理增加饮食</view>
                </view>
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
