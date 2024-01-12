<template>
    <view class="content">
        <view class="title">登录</view>
        <view class="login-info">
            <input class="uni-input account-input" focus placeholder="用户账号" />
            <input class="uni-input password-input" password placeholder="密码" />
            <button class="login-btn" size="default" type="default" >登录</button>
        </view>

    </view>
</template>

<script>
export default {
    data() {
        return {

        };
    }
}
</script>

<style scoped>
@import "./style/login.scss";
</style>
