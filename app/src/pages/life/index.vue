<template>
    <view class="content">
        <!--头部-->
        <view class="header"></view>
        <!--主体-->
        <view class="wrap">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: '生活空间'
        }
    },
    onLoad() {

    },
    methods: {

    }
}
</script>

<style scoped>
.header {
    padding: 20px 10px 35px;
    width: 100%;
    height: 365px;
    border-radius: 0 0 45px 45px;
    background-color: #fff;
    box-shadow: 2px 2px 10px rgba(0,0,0,.15);
}

.wrap {
    padding: 30px 6px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}
.item {
    margin-bottom: 20px;
    width: 185px;
    height: 240px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 2px 2px 10px rgba(0,0,0,.1);
}
</style>
