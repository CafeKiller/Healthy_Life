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
                <view class="other-info-item">体重</view>
                <view class="other-info-item">身高</view>
                <view class="other-info-item">血压</view>
                <view class="other-info-item">心率</view>
            </view>
        </view>
        <view class="option-list">
            <view class="option-item">公告</view>
            <view class="option-item">管理</view>
            <view class="option-item">关于</view>
            <view class="option-item">退出</view>
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
            uni.navigateTo({ url:"./login" })
        }
    },
    methods: {

    }
}
</script>

<style>
@import "./style/index.scss";
</style>
