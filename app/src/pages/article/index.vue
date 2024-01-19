<template>
    <view class="content">
        <view class="search-cont">
            <input class="search-input" type="input" placeholder="请输入相关文章关键字"></input>
            <view class="search-btn" size="mini" >
                <span class="iconfont icon-fangdajing"></span>
            </view>
        </view>
        <view class="tips-cont">
            <div class="tips-item">
                <view class="title">专业咨询</view>
                <view class="iconfont icon-baike"></view>
            </div>
            <div class="tips-item">
                <view class="title">智能建议</view>
                <view class="iconfont icon-rengongzhinengdanao"></view>
            </div>
        </view>
        <view class="article-list">
            <view v-for="(item, index) in articleList" :key="index">
                <view class="article-item">
                    <view class="article-image">
                        <img :src="img_url_prefix + item.img" alt="">
                    </view>
                    <view class="article-title">{{item.title}}</view>
                    <view class="article-cont">
                        <p class="tags">{{item.tags}}</p>
                        <p class="author">{{item.author}}</p>
                        <p class="time">{{item.time}}</p>
                    </view>
                </view>
            </view>

        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: '文章页面',
            img_url_prefix: "http://localhost:9999/project/HL/static/",
            articleList: [
                {
                    img: "1.jpg",
                    title: "“打鼾像唱歌”可能并不是睡得香",
                    tags: "打鼾 睡觉 呼吸",
                    author: "科技日报",
                    time: "2023年10月31日 10:11"
                },
            ]
        }
    },
    onLoad() {

    },
    methods: {

    }
}
</script>

<style scoped>
@import "./style/index.scss";
</style>
