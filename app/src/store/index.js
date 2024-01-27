import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        user: { },
        articles: [],
        currentData:{},
    },
    mutations: {
        setUser: (state, newVal)=> {
            state.user = newVal
        },
        setArticles: (state, newVal) => {
            state.articles = newVal
        },
        setCurrentData:(state, newVal)=>{
            state.currentData = newVal
        }
    },
    actions: {
        /**
         * 用户登录处理函数, 登录成功后将登录态保存到状态中心,
         * 并将登录态保持到缓存中
         * */
        userLogin: (context, newVal) => {
            uni.request({
                url: '/api/user/login',
                method: "POST",
                data: {
                    account: newVal._account,
                    password: newVal._password,
                },
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'xmlhttprequest'
                },
                success: (res) => {
                    if(res.data.data) {
                        // 保存参数至VueX
                        context.commit("setUser", res.data.data)
                        // 备份至缓存中
                        uni.setStorageSync("user_data", res.data.data)
                    }
                }
            })
        },
        /**
         * 获取全部文章集合函数
         * */
        requestArticleList: (content) => {
            uni.request({
                url: "/api/article/all",
                method: "GET",
                success: (res) => {
                    if(res.data.data) {
                        content.commit("setArticles", res.data.data.result)
                    }
                }
            })
        }
    },
    getters: {
        getUser: (state)=> {
            return state.user
        },
        getArticle: ( ) =>{

        }
    }
})
export default store