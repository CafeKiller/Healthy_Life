<template>
    <view class="content" >
        <view class="search-cont">
            <input class="search-input" @input='onInputKey' type="input" placeholder="请输入相关文章关键字"></input>
            <view class="search-btn" size="mini" @tap.stop='searchArticle'>
                <span class="iconfont icon-fangdajing"></span>
            </view>
        </view>
        <view class="tips-cont">
            <view v-show='isShow' class="tips-item">
                <view class="title">专业咨询</view>
                <view class="iconfont icon-baike"></view>
            </view>
            <view v-show='isShow' class="tips-item">
                <view class="title">智能建议</view>
                <view class="iconfont icon-rengongzhinengdanao"></view>
            </view>
            <div v-show='!isShow' class='tips-item return' @tap.stop='showAllArticles'>
                显示全部文章
            </div>
        </view>
        <view class="article-list">
            <view v-for="(item, index) in articleList" :key="item.aid">
                <view class="article-item" @tap.stop='enterArticle(item.content, item.title)'>
                    <view class="article-image">
                        <img :src="img_url_prefix + item.image" :alt="'图片_'+item.title">
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
import { mapMutations, mapState } from 'vuex'
import { article } from '@dcloudio/vue-cli-plugin-uni/packages/postcss/tags'
export default {
    data() {
        return {
            isShow: true,
            img_url_prefix: "http://192.168.8.102:9999/project/HL/static/",
            articleList: [],
            inputKey : "请输入相关文章关键字",
        }
    },
    computed: {
        ...mapState(['articles'])
    },
    onLoad() {
        uni.request({
            url: "/api/article/all",
            method: "GET",
            success: (res) => {
                if(res.data.data) {
                    this.articleList = res.data.data.result
                    this.setArticles(res.data.data.result)
                }
            }
        })
    },
    methods: {
        ...mapMutations(["setArticles"]),
        // HACK 处理 uniApp 数据双向绑定BUG
        onInputKey(event){
            this.inputKey = event.detail.value
        },
        /**
         * 携带参数进入文章内容页面
         * @param {string} contUrl 文章url
         * */
        enterArticle(contUrl, contTitle) {
            uni.navigateTo({
                url:`/pages/article/content?contUrl=${contUrl}&title=${contTitle}`,
                success:() => {
                    console.log("链接跳转成功, 正在前往")
                },
                fail:() => {
                  uni.showToast({
                      title:"参数异常", icon:"error"
                  })
                }
            })
        },
        /**
         * 搜索文章函数, 需要先检查用户输入的关键字是否合法,
         * 搜索成功, 会将页面当前展示的文章替换掉, 搜索失败时则返回错误信息
         * */
        searchArticle(){
            if (!this.detectionInputKey(String(this.inputKey))) {
                uni.showToast({
                    title:"抱歉, 请输入合法的关键字",
                    icon:"error"
                })
                return
            }
            uni.request({
                url: `/api/article/title/${this.inputKey}`,
                method: "GET",
                success: (res) => {
                    if (res.data.data.result.length) {
                        uni.showToast({
                            title:"检索成功",
                            icon:"success"
                        })
                        this.articleList = res.data.data.result
                        this.isShow = !this.isShow
                    } else {
                        uni.showToast({
                            title:" 失败, 无相关文章 ",
                            icon:"error"
                        })
                    }

                }
            })

        },
        /**
         * 检查用户输入的文章关键字是否合法
         * 主要检查 字符是否为空 字符是否为全数字
         * @param {string} key 关键字
         * @return {boolean} 返回检查合法性
         * */
        detectionInputKey(key){
            if (!key) return false
            if (/^\d+$/.test(key)) return false
            return true
        },
        /**
         * 展示所有文章函数
         * */
        showAllArticles(){
            if(this.articles) {
                this.isShow = !this.isShow
                this.articleList = this.articles
            }
        }
    }
}
</script>

<style scoped>
@import "./style/index.scss";
</style>
