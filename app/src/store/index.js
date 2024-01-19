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
            let {account, password} = newVal
            uni.request({
                url: '/api/user/login',
                method: "POST",
                data: {
                    account, password,
                },
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'xmlhttprequest'
                },
                success: (res) => {
                    if(res.data.data) {
                        console.log(res)
                        context.commit("setUser", res.data.data)
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