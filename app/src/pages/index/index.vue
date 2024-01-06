<template>
	<view class="content">
		<!--	今日体重相关提示模块	-->
		<view class="current-tips-box">
			<view class="current-data-box">

			</view>
		</view>
		<!--	今日卡路里消耗模块	-->
		<view class="current-cal-cont">
			<view class="title">今日卡路里消耗</view>
			<view class="current-cal-box">

			</view>
		</view>
		<!--	运动计划模块  -->
		<view class="current-movement-cont">
			<view class="title">今日运动规划</view>
			<view class="current-movement-box">

			</view>
		</view>
		<!--	睡眠质量模块  -->
		<view class="current-movement-cont">
			<view class="title">今日睡眠质量</view>
			<view class="current-movement-box">

			</view>
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

		},
		methods: {

		}
	}
</script>

<style scoped>
.current-tips-box {
	padding: 10px 10px;
	margin: 0 auto 0;
	width: 100%;
	height: 200px;
	border-radius: 0 0 15px 15px;
	display: flex;
	background: var(--main-color);
}
.current-data-box {
	width: 240px;
	height: 180px;
	border-radius: 15px;
	background-color: var(--sub-color-1);
}

.current-cal-cont {
	margin: 20px auto 20px;
	padding: 15px 10px;
	width: 100%;
	height: 200px;
	background-color: #fff;
}
.current-movement-cont .title,
.current-cal-cont .title {
	font-weight: 800;
	font-size: 18px;
	line-height: 20px;
	color: #333333;
	letter-spacing: 2px;
}
.current-cal-cont .current-cal-box {
	position: relative;
	margin-top: 10px;
	height: 140px;
	border-radius: 15px;
	background-color: var(--sub-color-2);
}

.current-movement-cont {
	margin: 0 auto 0;
	padding: 15px 10px;
	width: 100%;
	height: 310px;
	background-color: #fff;
}
.current-movement-box {
	margin-top: 15px;
	width: 100%;
	height: 260px;
	border-radius: 15px;
	background-color: var(--sub-color-1);
}
</style>
