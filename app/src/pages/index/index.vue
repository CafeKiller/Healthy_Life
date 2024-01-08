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
						<view class="data">17.6</view>
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
.current-tips-box {
	position: relative;
	margin: 0 auto 0;
	width: 100%;
	height: 200px;
	border-radius: 0 0 15px 15px;
	display: flex;
	background: var(--sub-color-1);
}
.top-cont {
	position: relative;
	padding:20px 20px 0;
	width: 100%;
	display: flex;
}
.top-cont .update-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	background-color: var(--reve-color);
	box-shadow: 2px 2px 5px rgba(0,0,0,.2);
}
.top-cont .update-btn .iconfont {
	font-size: 30px;
	color: #ffffff;
}
.top-cont .current-weight {
	font-size: 64px;
	line-height: 1;
	color: #ffffff;
}
.top-cont .current-weight .small {
	position: relative;
	font-size: 32px;
	font-weight: 800;
}
.top-cont .current-weight .small::before {
	content: "KG";
	position: absolute;
	top: -16px;
	left: -5px;
	font-size: 18px;
	line-height: 1;
}
.top-cont .current-time{
	font-size: 18px;
	text-indent: 5px;
	letter-spacing: 2px;
	color: var(--sub-color-2);
}

.top-cont .center {
	margin-left: 40px;
}
.compare-weight {
	position: relative;
	margin-top: 28px;
	font-size: 32px;
	font-weight: 800;
	line-height: 1;
	color: #ffffff;
}
.compare-weight .iconfont {
	position: absolute;
	top: 5px;
	left: 50px;
	font-size: 24px;
	animation: breath .7s ease infinite;
}
.compare-weight .iconfont.down {
	transform: rotateZ(-180deg);
}
.compare-desc {
	font-size: 18px;
	line-height: 30px;
	text-indent: 5px;
	letter-spacing: 2px;
	color: var(--sub-color-2);
}
@keyframes breath {
	100%, 0% {
		top: 5px;
	}
	50% {
		top: 8px;
	}
}
.bottom-cont {
	position: absolute;
	left: 50%;
	bottom: 10px;
	display: flex;
	justify-content: space-around;

	width: 95%;
	height: 78px;
	border-radius: 15px;
	background-color: var(--main-color);
	transform: translateX(-50%);
	z-index: 10;
}
.bottom-cont > view {
	width: 45%;
	padding-top: 10px;
	text-align: center;
}
.bottom-cont view .top {
	width: 100%;
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
}
.bottom-cont view .top .top-desc {
	margin-left: 5px;
	padding: 0 6px;
	font-size: 16px;
	line-height: 24px;
	border-radius: 5px;
	color: var(--main-color);
	background-color: #fff;
}
.bottom-cont view .data {
	font-size: 24px;
	line-height: 1.5;
	color: #ffffff;
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
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 140px;
	border-radius: 15px;
	background-color: var(--sub-color-2);
}
.cal-left-box {
	width: 195px;
	height: 120px;
	border-radius: 10px;
	background: #ffff;
	font-size: 32px;
	line-height: 120px;
	text-align: center;
}
.cal-right-box {
	width: 145px;
	height: 120px;
	border-radius: 10px;
	background: #ffff;
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
