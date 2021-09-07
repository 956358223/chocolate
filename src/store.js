import Vue from 'vue'
import Vuex from 'vuex'
import theme from './frame/theme';
import layout from './frame/layout';

Vue.use(Vuex)

export default new Vuex.Store({
    // 基本状态
    state: {
        principals: {
            username: window.localStorage.getItem('PRINCIPALS' || '[]') == null ? '' :
                JSON.parse(window.localStorage.getItem('PRINCIPALS' || '[]')).username,
            token: window.localStorage.getItem('PRINCIPALS' || '[]') == null ? '' :
                JSON.parse(window.localStorage.getItem('PRINCIPALS' || '[]')).token,
            authorities: window.localStorage.getItem('PRINCIPALS' || '[]') == null ? '' :
                JSON.parse(window.localStorage.getItem('PRINCIPALS' || '[]')).authorities
        },
        routes: [],
    },
    // 派生数据
    getters: {},
    // 更改数据
    mutations: {
        logon(state, data) {
            state.principals = data
            window.localStorage.setItem('PRINCIPALS', JSON.stringify(data));
        },
        logout(state) {
            state.principals = {}
            window.localStorage.clear()
        }
    },
    // 装饰异步
    actions: {},
    // 所有模块
    modules: {layout, theme}
})
