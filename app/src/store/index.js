import Vue from 'vue'
import Vuex from 'vuex'
import {log} from "@dcloudio/vue-cli-plugin-uni/lib/format-log";

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        user: { }
    },
    mutations: {
        setUser: (state, newVal)=> {
            state.user = newVal
        }
    },
    actions: {
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
        }
    },
    getters: {
        getUser: (state)=> {
            return state.user
        }
    }
})
export default store