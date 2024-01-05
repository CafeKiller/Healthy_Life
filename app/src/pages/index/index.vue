<template>
	<view class="content">
		<view class="current-tips-box">
			<div class="current-data-box">

			</div>
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

<style>
.content {
	padding-top: 20px;
	width: 100%;
}
.current-tips-box {
	padding: 10px 10px;
	margin: 0 auto 0;
	width: 95%;
	height: 200px;
	border-radius: 25px;
	display: flex;
	background: var(--main-color);
}
.current-data-box {
	width: 240px;
	height: 180px;
	border-radius: 25px;
	background-color: var(--sub-color-1);
}
</style>
