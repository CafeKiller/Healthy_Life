<template>
    <view class="content">
        <view class="header">
            <view class="user-cover">
                <image src="/static/user_def.png"></image>
            </view>
            <view class="user-info">
                <view class="info-item">年龄: ---</view>
                <view class="info-item">昵称: ---</view>
                <view class="info-item">性别: ---</view>
            </view>
        </view>
        <view class="wrap">
            <view class="other-info">
                <view class="other-info-item">
                    <view class="title">体重</view>
                    <view class="iconfont icon-icon"></view>
                    <view class="data">60<span class="unit">KG</span></view>
                </view>
                <view class="other-info-item">
                    <view class="title">身高</view>
                    <view class="iconfont icon-shengao"></view>
                    <view class="data">175<span class="unit">cm</span></view>
                </view>
                <view class="other-info-item">
                    <view class="title">血压</view>
                    <view class="iconfont icon-shouye"></view>
                    <view class="data">90<span class="unit">mmHg</span></view>
                </view>
                <view class="other-info-item">
                    <view class="title">心率</view>
                    <view class="iconfont icon-heart-rate"></view>
                    <view class="data">60<span class="unit">Bpm</span></view>
                </view>
            </view>
        </view>
        <view class="option-list">
            <view class="option-item">
                <view class="iconfont icon-gonggao"></view>
                公告
                <view class="iconfont icon-qianjin"></view>
            </view>
            <view class="option-item">
                <view class="iconfont icon-shezhi" ></view>
                管理设置
                <view class="iconfont icon-qianjin"></view>
            </view>
            <view class="option-item">
                <view class="iconfont icon-wode"></view>
                关于我们
                <view class="iconfont icon-qianjin"></view>
            </view>
            <view class="option-item">
                <view class="iconfont icon-chexiao"></view>
                退出账号
                <view class="iconfont icon-qianjin"></view>
            </view>
        </view>
    </view>
</template>

<script>

export default {
    data() {
        return {
            user_info: null
        }
    },
    onLoad() {
        if (!this.user_info) {
            console.error("用户未登录, 跳转至登录页面")
            // uni.navigateTo({ url:"./login" })
        }
    },
    methods: {

    }
}
</script>

<style>
@import "./style/index.scss";
</style>
