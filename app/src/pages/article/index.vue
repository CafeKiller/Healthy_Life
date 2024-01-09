<template>
    <view class="content">
        <view class="search-cont">
            <input class="search-input" type="input" placeholder="请输入相关文章关键字"></input>
            <view class="search-btn" size="mini" >搜</view>
        </view>
        <view class="tips-cont">
            <div class="tips-item"></div>
            <div class="tips-item"></div>
        </view>
        <view class="article-list">
            <view class="article-item">
                <view class="article-image"></view>
                <view class="article-title"></view>
                <view class="article-content"></view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: '文章页面'
        }
    },
    onLoad() {

    },
    methods: {

    }
}
</script>

<style scoped>
.search-cont {
    padding: 2px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
}
.search-input {
    padding-left: 10px;
    width: 90%;
    height: 36px;
    border-bottom: 1px solid var(--sub-color-2);
}
.search-btn {
    margin-left: 5px;
    width: 10%;
    height: 36px;
    line-height: 36px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid var(--sub-color-2);
}

.tips-cont {
    padding: 0 10px;
    margin: 15px auto 15px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.tips-item {
    width: 45%;
    height: 100px;
    border-radius: 15px;
    background-color: var(--sub-color-1);
}
</style>
