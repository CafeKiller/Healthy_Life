<template>
    <view class="content" >
        <view class="search-cont">
            <input class="search-input" @input='onInputKey' type="input" placeholder="请输入相关文章关键字"></input>
            <view class="search-btn" size="mini" @tap.stop='searchArticle'>
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
            <view v-for="(item, index) in articleList" :key="item.aid">
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
            articleList: [],
            inputKey : "请输入相关文章关键字",
        }
    },
    computed: {
    },
    onLoad() {
        // 页面加载时 同时加载新闻列表
        uni.request({
            url: "/api/article/all",
            method: "GET",
            success: (res) => {
                if(res.data.data) {
                    this.articleList = res.data.data.result
                }
            }
        })
    },
    methods: {
        // HACK 处理 uniApp 数据双向绑定BUG
        onInputKey(event){
            this.inputKey = event.detail.value
        },
        /**
         * 搜索文章函数, 需要先检查用户输入的关键字是否合法
         * */
        searchArticle(){
            if (!this.detectionInputKey(String(this.inputKey))) {
                uni.showModal({
                    title: "警告",
                    content: "请输入合法的关键字",
                    showCancel: false
                })
            }
        },
        /**
         * 检查用户输入的文章关键字是否合法
         * 主要检查 字符是否为空 字符是否为全数字
         * @param {string} key 关键字
         * @return {boolean} 返回检查合法性
         * */
        detectionInputKey(key){
            if (key) return false
            if (/^\d+$/.test(key)) return false
            return true
        }
    }
}
</script>

<style scoped>
@import "./style/index.scss";
</style>
