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
                        <img :src="img_url_prefix + item.image" alt="">
                    </view>
                    <view class="article-title">{{item.title}}</view>
                    <view class="article-cont">
                        <p class="tags">{{item.tags}}</p>
                        <p class="author">{{item.author}}</p>
                        <p class="time">{{item.updated_at}}</p>
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
            articleList: null
        }
    },
    computed: {
        articleList(){
            return
        }
    },
    onLoad() {
        uni.request({
            url: "/api/article/all",
            method: "GET",
            success: (res) => {
                console.log(res)
                if(res.data.data) {
                    this.articleList = res.data.data.result
                }
            }
        })
    },
    methods: {

    }
}
</script>

<style scoped>
@import "./style/index.scss";
</style>
