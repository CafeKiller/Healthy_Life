<template>
    <view class="content">
        <view class="title">REGISTER</view>
        <view class="register-info">
            <input class="uni-input account-input" v-model="user_info.account" type="number"  focus placeholder="用户账号(建议使用手机号)" />
            <input class="uni-input password-input" v-model="user_info.password" password  placeholder="密码" />
            <input class="uni-input username-input" v-model="user_info.username" placeholder="用户昵称"></input>
            <input class="uni-input age-input" v-model="user_info.age" type="number" placeholder="年龄">
            <input class="uni-input sex-input" v-model="user_info.sex"  placeholder="性别">
            <input class="uni-input email-input" v-model="user_info.email"  placeholder="用户邮箱">
        </view>
        <button class="register-btn" size="default" @click="" type="default" >注册</button>
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
    }
}
</script>

<style >
@import "style/register.scss";
</style>
