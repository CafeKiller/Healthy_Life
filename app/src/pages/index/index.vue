<template>
	<view class="content">
		<!--	今日体重相关提示模块	-->
		<view class="current-tips-box">
				<view class="top-cont">
					<view class="update-btn" @tap='popUpdateDayDataDialog()'>
						<span class="iconfont icon-gengxin"></span>
					</view>
					<view class="left">
						<view class="current-weight">123.<span class="small">0</span></view>
						<view class="current-time">{{currentTime}}</view>
					</view>
					<view class="center">
						<view class="compare-weight">0.5<span class="iconfont down icon-xiangshangjiantoucuxiao"></span> </view>
						<view class="compare-desc">与昨日相比有下降</view>
					</view>
				</view>
				<view class="bottom-cont">
					<view class="bmi-cont">
						<view class="top">BMI <span class="top-desc">正常</span> </view>
						<view class="data">12.6</view>
					</view>
					<view class="brf-cont">
						<view class="top">BRF <span class="top-desc">偏瘦</span> </view>
						<view class="data">17.6%</view>
					</view>
				</view>
		</view>
		<!--	今日卡路里消耗模块	-->
		<view class="current-cal-cont">
			<view class="title">今日卡路里消耗</view>
			<view class="current-cal-box">
				<view class="cal-left-box">
					<span class="current">1200</span>
					<span class="center">/</span>
					<span class="target">2000</span>
					<view class="iconfont icon-qialuli"></view>
				</view>
				<view class="cal-right-box">
					<view class="item">炸鱼薯条</view>
					<view class="item">低脂汉堡</view>
					<view class="item">三明治</view>
					<view class="iconfont icon-shiwu-"></view>
				</view>
			</view>
		</view>
		<!--	运动计划模块  -->
		<view class="current-movement-cont">
			<view class="title">今日运动规划</view>
			<view class="current-movement-box">
				<view class="title">步数</view>
				<view class="data">8000/10000 步</view>
				<view class="iconfont icon-paobu"></view>
			</view>
			<view class="current-aerobic-box">
				<view class="title">有氧运动</view>
				<view class="data">50min/150min</view>
				<view class="iconfont icon-yundong-"></view>
			</view>
		</view>
		<!--	睡眠质量模块  -->
		<view class="current-sheep-cont">
			<view class="title">今日睡眠质量</view>
			<img src='@/static/img.png' alt=''>
		</view>

		<!--	弹窗部分	-->
		<DialogDayData
			v-if='isShowCommonDialog'
			:isShowCommonDialog='isShowCommonDialog'
			@UpdateDialogDayDataState='UpdateDialogDayDataState'
		>
		</DialogDayData>
	</view>
</template>

<script>
	import dayjs from 'dayjs'
	import DialogDayData from '@/components/dialog/dialogDayData.vue'
	import { mapMutations, mapState } from 'vuex'

	export default {
		data() {
			return {
				isShowCommonDialog: false,
				currentTime: "1月7日 19:56",
			}
		},
		computed:{
			...mapState(['user',"currentData"])
		},
		components:{
			DialogDayData
		},
		onLoad() {
			// 进入页面后检查当前是否拥有当日数据, 没有则拉取后端数据
			if (JSON.stringify(this.currentData) === "{}" && this.user.uid) {
				uni.request({
					url: `/api/data/find?uid=${this.user.uid}`,
					method: "GET",
					header:{
						"token": this.user.token
					},
					success: (res) => {
						if (res.data.data) {
							this.setCurrentData(res.data.data)
							console.log("成功拉取到用户当日数据 =>", res)
						}
					}
				})
			}
			this.currentTime = dayjs().format("MM月DD日 HH:mm")
			this.updateCurrentData()
		},
		methods: {
			...mapMutations(["setCurrentData"]),
			/**
			 * 拉起每日记录更新弹窗
			 * */
			popUpdateDayDataDialog(){
				this.UpdateDialogDayDataState(true)
			},
			/**
			 * 更新当前时间函数
			 * */
			updateCurrentData(){
				setInterval(()=>{
					this.currentData = dayjs().format("MM月DD日 HH:mm")
				}, 60000)
			},
			/**
			 * 通过传入的值, 来关闭和显示弹窗
			 * */
			UpdateDialogDayDataState(data){
				this.isShowCommonDialog = data
			},
		}
	}
</script>

<style scoped>
@import "style/index.scss";

</style>
