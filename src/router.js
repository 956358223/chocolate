import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/logon',
            name: 'logon',
            meta: {auth: false, title: '欢迎登录'},
            component: () => import('./views/Logon.vue')
        },
        {
            path: '/',
            name: 'layout',
            meta: {auth: true, title: '布局界面'},
            component: () => import('./views/Layout.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    meta: {auth: false, title: '首页'},
                    component: () => import('./views/index/Home.vue')
                },
            ]
        }
    ]
})
