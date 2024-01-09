<template>
    <view class="content">
        <view class="header">
            <view class="user-cover">

            </view>
            <view class="user-info">
                <view class="info-item">年龄: 18</view>
                <view class="info-item">昵称: CoffeeKiller</view>
                <view class="info-item">性别: 男</view>
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
            <view class="option-item">其他</view>
            <view class="option-item">公告</view>
            <view class="option-item">管理</view>
            <view class="option-item">关于</view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: '用户空间'
        }
    },
    onLoad() {

    },
    methods: {

    }
}
</script>

<style>
.header {
    padding-top: 50px;
    width: 100%;
    height: 240px;
    background-color: var(--main-color);
}
.header .user-cover {
    margin: 0 auto 0;
    width: 120px;
    height: 120px;
    background-color: #fff;
    border-radius: 10px;
}
.header .user-info {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    color: #ffffff;
}

.wrap {
    margin-top: 30px;
    width: 100%;
    display: flex;
    background-color: #fff;
}
.other-info {
    padding: 15px 18px;
    height: 430px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.other-info-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 180px;
    border-radius: 10px;
    background-color: var(--sub-color-1);
}
.other-info-item {
    font-size: 20px;
    text-align: center;
    color: #ffffff;
}
</style>
