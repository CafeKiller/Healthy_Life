<template>
    <view class="content">
        <view class="title">REGISTER</view>
        <view class="register-info">
            <input class="uni-input account-input" v-model="user_info.account" type="number" focus placeholder="用户账号(建议使用手机号)" />
            <input class="uni-input password-input" v-model="user_info.password" password  placeholder="密码" />
            <input class="uni-input username-input" v-model="user_info.username" placeholder="用户昵称"></input>
            <input class="uni-input age-input" v-model="user_info.age" type="number" placeholder="年龄">
            <input class="uni-input sex-input" v-model="user_info.sex"  placeholder="性别">
            <input class="uni-input email-input" v-model="user_info.email"  placeholder="用户邮箱">
        </view>
        <button class="register-btn" size="default" @click="register()" type="default" >注册</button>
    </view>
</template>

<script>
export default {
    data() {
        return {
            user_info: {
                username: "",
                account: "",
                password: "",
                age: null,
                sex: "",
                email: "",
            }
        };
    },
    methods: {

        register() {
            let result = this.verifyInfo()
            if (!result) {
                uni.showModal({
                    title: "提示",
                    icon: "fail",
                    content: "注册参数有误",
                    showCancel: false
                })
            } else {
                uni.request({
                    method: "POST",
                    url: '/api/user/register',
                    data: {
                        account: this.user_info.account,
                        user_name: this.user_info.username,
                        password: this.user_info.password,
                        sex: this.user_info.sex,
                        age: this.user_info.age,
                        email: this.user_info.email,
                    },
                    header: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-Requested-With': 'xmlhttprequest'
                    },
                    success: (res) => {
                        if(res.data) {
                            uni.showModal({
                                title: "提示",
                                icon: "success",
                                content: "注册成功, 点击确认跳转至登录页面",
                                showCancel: false,
                                success: function (res) {
                                    if (res.confirm) {
                                        uni.navigateTo({ url:"./login" })
                                    }
                                }
                            })
                            return
                        }
                        uni.showModal({
                            title: "提示",
                            icon: "error",
                            content: "注册失败, 请重试",
                            showCancel: false,
                            success: function (res) { }
                        })
                    }
                });
            }
        },
        // 检验注册信息
        verifyInfo() {
            let user = this.user_info
            if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(user.account)){
                return false
            }
            if (!user.password) return false
            if (!user.username) return false
            if (!/^[男|女]{1}$/.test(user.sex)) return false
            if (!user.sex) return false
            return true
        }
    },
}
</script>

<style >
@import "style/register.scss";
</style>
