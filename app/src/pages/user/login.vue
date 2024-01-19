<template>
    <view class="content">
        <view class="title">LOGIN</view>
        <view class="login-info">
            <input class="uni-input account-input" v-model="loginAccount" type="number" @blur="inputAccount" focus placeholder="用户账号" />
            <input class="uni-input password-input" v-model="loginPassword" password @blur="inputPassword" placeholder="密码" />
            <button class="login-btn" size="default" @click="submitInfo()" type="default" >登录</button>
        </view>
        <view class="register-link" @click="goRegisterPage">没有账号? 点击此处注册</view>
        <view class="other-login-title">其他登录方式</view>
        <view class="other-login-list">
            <view class="other-login-item qq"></view>
            <view class="other-login-item wx"></view>
            <view class="other-login-item git"></view>
        </view>
    </view>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {

    data() {
        return {
            loginAccount: "",
            loginPassword: ""
        };
    },
    computed: {
        ...mapState(['user']),
        ...mapGetters(['getUser'])
    },
    methods: {
        ...mapActions(["userLogin"]),
        inputAccount: function (event) {
            // TODO 检查账户格式是否有效
        },
        inputPassword: function (event) {
            // TODO 检查密码格式是否合法
        },
        async submitInfo() {
            if (!this.loginAccount) return
            if (!this.loginPassword) return
            console.log(this.loginAccount, this.loginPassword)
            await this.userLogin({_account: this.loginAccount, _password: this.loginPassword})
        },
        goRegisterPage: function () {
            uni.navigateTo({url: "./register"})
        }
    },
}
</script>

<style scoped>
@import "style/login.scss";
</style>
