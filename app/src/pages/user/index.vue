<template>
    <view class="content">
        <view class="header">
            <view class="user-cover" @tap='userCoverHandle'>
                <image src="/static/user_def.png"></image>
            </view>
            <view class="user-info">
                <view class="info-item">年龄: {{user.age}}</view>
                <view class="info-item">昵称: {{user.user_name}}</view>
                <view class="info-item">性别: {{user.sex}}</view>
            </view>
        </view>
        <view class="wrap">
            <view class="other-info" @tap.stop="userDataHandle">
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
            <view class="option-item" @tap.stop='logout'>
                <view class="iconfont icon-chexiao"></view>
                退出账号
                <view class="iconfont icon-qianjin"></view>
            </view>
        </view>
        <DialogDayData v-show='isShow'></DialogDayData>
    </view>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import DialogDayData  from "@/components/dialog/dialogDayData.vue"
export default {
    name:"index",
    data() {
        return {
            isShow:false
        }
    },
    components:{
        DialogDayData
    },
    computed: {
        ...mapState(['user']),
    },
    onLoad() {
        if (!this.user.uid) {
            console.warn("[user state warning] 用户未登录, 跳转至登录页面")
            uni.navigateTo({ url:"./login" })
        }
    },
    onShow(options) {

    },
    methods: {
        ...mapMutations(["setUser"]),
        /**
         * 用户退出处理函数, 退出的同时需要将本地缓存的登录态也一并清除
         * */
        logout(){
            uni.showModal({
                title:"是否退出当前账户",
                success: (res)=>{
                    if(res.confirm) {
                        this.setUser({})
                        uni.setStorageSync("user_data", {})
                    }
                }
            })
        },
        /**
         * 用户头像处理, 如果检查到用户未登录就跳转到登录页面
         * 如果检查到用户已经登录, 则拉起 用户头像上传弹窗
         * */
        userCoverHandle(){
            if(!this.user.uid) {
                uni.navigateTo({ url:"./login" })
                return
            }
            // TODO 用户登录后 点击头像 上传头像
        },
        /**
         * 用户展示数据处理函数, 同样需要先检查用户是否登录,
         * 如果用户登录了就拉起用户数据修改弹窗
         * */
        userDataHandle(){
            if(!this.user.uid) {
                uni.navigateTo({ url:"./login" })
                return
            }
            uni.navigateTo({url: "./update?id=iWeight"})
        }
    }
}
</script>

<style>
@import "./style/index.scss";
</style>
