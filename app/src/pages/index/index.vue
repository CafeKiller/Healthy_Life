<template>
	<view class="content">

		<van-notice-bar
			color="red"
			background="##d7f7f3"
			left-icon="info-o">
			每日数据需要手动更新才能保证数据准确性哦。
		</van-notice-bar>

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


		<van-notice-bar
			style='margin-top: 20upx'
			left-icon="volume-o"
			text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
		/>

		<!--	今日卡路里消耗模块	-->
		<view class="current-cal-cont">
			<view class="title">今日卡路里消耗</view>
			<view class="current-cal-box">
				<view class="cal-left-box">
					<span class="current">{{currentData.calorie}}</span>
					<span class="center">/</span>
					<span class="target">{{userPlanData.calorie}}</span>
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
				<view class="data">{{currentData.stepNum}} / {{userPlanData.kilometre}}步</view>
				<view class="iconfont icon-paobu"></view>
			</view>
			<view class="current-aerobic-box">
				<view class="title">有氧运动</view>
				<view class="data">{{ currentData.exerciseTime }}min / {{userPlanData.exerciseTime}}min</view>
				<view class="iconfont icon-yundong-"></view>
			</view>
		</view>
		<!--	睡眠质量模块  -->
		<view class="current-sheep-cont">
			<view class="title">今日睡眠质量</view>
			<view class='sheep-echarts-cont'>
				<view id='sheepEcharts'
							class='echarts-cont'
							style='width: 900upx; height: 700upx'></view>
			</view>
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
	import { Notify } from 'vant';
	import dayjs from 'dayjs'
	import DialogDayData from '@/components/dialog/dialogDayData.vue'
	import { mapMutations, mapState } from 'vuex'

	const BASE_TIME = '2024-01-01'
	export default {
		data() {
			return {
				isShowCommonDialog: false,
				currentTime: "1月7日 19:56",
				dayArr:['0217', '0218','0219', '0220', '0221'],
				sheepDataArr: [
					"2024-01-01 7:00",
					"2024-01-01 6:20",
					"2024-01-01 6:40",
					"2024-01-01 6:52",
					"2024-01-01 7:13"
				]
			}
		},

		mounted() {
			this.initSheepEchartsTable()
		},
		computed:{
			...mapState(['user',"currentData","userPlanData"])
		},
		components:{
			DialogDayData,
			[Notify.Component.name]: Notify.Component,
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
							this.setCurrentData(res.data.data);
							console.log("成功拉取到用户当日数据 =>", res);
							return;
						}
						this.isShowCommonDialog = true;
						Notify({ type: 'warning', message: '今日的数据还没有更新哦' });
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
			/**
			 * 初始化 Echarts 图标, 数据为每日睡眠数据
			 * */
			initSheepEchartsTable() {
				const sheepEcharts = this.$echarts.init(document.getElementById('sheepEcharts'));
				// 指定图表的配置项和数据
				let option = {
					xAxis: {
						type: 'category',
						data: this.dayArr
					},
					yAxis: {
						type: 'time',
					},
					series: [
						{
							data: this.sheepDataArr,
							type: 'line',
							smooth: true
						}
					]
				};
				sheepEcharts.setOption(option)
			}
		}
	}
</script>

<style scoped>
@import "style/index.scss";

</style>
