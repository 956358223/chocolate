import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icon/iconfont.css'
import '@/assets/scss/scroll.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from './http'
import VueAxios from 'vue-axios'
import VueParticles from 'vue-particles'
import {initMenu} from './frame/menus'

Vue.use(VueParticles)

Vue.use(ElementUI);
Vue.use(VueAxios, http)
Vue.prototype.http = http
Vue.config.productionTip = false

/**
 /** 前置守卫
 * @param {to} 将要去的路由
 * @param {from} 出发的路由
 * @param {next} 执行下一步
 */
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = ''
        document.title = to.meta.title + ' - 琳琅天上'
        if (to.path != '/login') store.commit('choiceRoute', {path: to.path, name: to.meta.title})
    }
    next()
    initMenu(router, store)
    // next({path: '/logon', query: {redirect: to.fullPath}})
})

/**
 /** 后置守卫
 */
router.afterEach(() => {

})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
