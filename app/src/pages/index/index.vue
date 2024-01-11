<template>
	<view class="content">
		<!--	今日体重相关提示模块	-->
		<view class="current-tips-box">
				<view class="top-cont">
					<view class="update-btn">
						<span class="iconfont icon-gengxin"></span>
					</view>
					<view class="left">
						<view class="current-weight">123.<span class="small">0</span></view>
						<view class="current-time">1月7日 19:56</view>
					</view>
					<view class="center">
						<view class="compare-weight">0.5 <span class="iconfont down icon-xiangshangjiantoucuxiao"></span> </view>
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
					1200/2000
				</view>
				<view class="cal-right-box">
					炸鱼薯条
					低脂汉堡
				</view>
			</view>
		</view>
		<!--	运动计划模块  -->
		<view class="current-movement-cont">
			<view class="title">今日运动规划</view>
			<view class="current-movement-box">
				<view class="title">步数</view>
				<view class="data">8000/10000 步数</view>
			</view>
			<view class="current-aerobic-box">
				<view class="title">有氧运动</view>
				<view class="data">50min/150min</view>
			</view>
		</view>

		<!--	睡眠质量模块  -->
		<view class="current-sheep-cont">
			<view class="title">今日睡眠质量</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			/*uni.request({
				url: 'https://www.example.com/request',
				data: {
					text: 'uni.request'
				},
				header: {
					'custom-header': 'hello'
				},
				success: (res) => {
					console.log(res.data);
					this.text = 'request success';
				}
			});*/
		},
		methods: {

		}
	}
</script>

<style scoped>
@import "style/index.scss";

</style>
