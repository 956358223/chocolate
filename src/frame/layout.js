import router from "../router";

/**
 * 动态路由
 * @param menu
 */
function addRoutes(menu) {
    let routes = [];
    menu.forEach(({children, path, component, auth, name}) => {
        let hasChild = Array.isArray(children) && children.length > 0;
        if (!hasChild) {
            routes.push({
                path: path,
                meta: {
                    auth: auth,
                    title: name
                },
                component: () => import(`../views/${component}.vue`)
            });
            return;
        }
        children.forEach(({path, component, name, auth}) => {
            routes.push({
                path: path,
                meta: {
                    auth: auth,
                    title: name
                },
                component: () => import(`../views/${component}.vue`)
            });
        });
    });
    router.addRoutes([{
        path: '/',
        name: 'layout',
        component: () => import('../views/Layout.vue'),
        children: [...routes]
    }]);
}

/**
 * 获取路由
 * @type {string}
 */
let routeMenu = localStorage.getItem('ROUTE_MENU');

/**
 * 动态路由
 */
try {
    routeMenu = JSON.parse(routeMenu);
    addRoutes(routeMenu);
} catch (e) {
    routeMenu = [];
}

export default {
    state: {
        title: {
            shrink: 'W',
            expand: "Admin Template"
        },
        routeMenu: routeMenu,
        crumbMenu: [],      // 面包导航路由
        navsMenus: [
            {
                path: '/home',
                name: '系统首页',
                label: '系统首页',
                icon: 'el-icon-house'
            },
        ],   // 当前导航路由
        collapsed: true,    // 是否侧边收缩
        sideState: true,    // 是否显示侧边
        headState: true,    // 是否显示顶栏
        navsState: true,    // 是否显示导航
        loadState: true,    // 是否加载路由
    },
    mutations: {
        // 选择路由
        choiceRoute(state, route) {
            if (route.path !== '/home') {
                state.crumbMenu = route
                let index = state.navsMenus.findIndex(x => x.name === route.name)
                index === -1 ? state.navsMenus.push(route) : ''
            } else state.crumbMenu = null
        },
        // 关闭路由
        spliceRoute(state, value) {
            let index = state.navsMenus.findIndex(x => x.name === value.name)
            state.navsMenus.splice(index, 1)
        },
        // 关闭路由
        closedRoute(state) {
            state.navsMenus =
                [
                    {
                        path: '/home',
                        name: '系统首页',
                        label: '系统首页',
                        icon: 'el-icon-house'
                    },
                ]
        },
        // 动态路由
        routerMenus(state, menus) {
            addRoutes(menus);
            localStorage.setItem('ROUTE_MENU', JSON.stringify(menus));
            state.routeMenu = menus;
        },
        // 左侧收缩
        setCollapse(state) {
            state.collapsed = !state.collapsed;
        },
        // 动态侧栏
        changeSide(state, value) {
            state.sideState = value
        },
        // 动态导航
        changeNavs(state, value) {
            state.navsState = value
        },
        // 动态顶栏
        changeHead(state, value) {
            state.headState = value
        },
        // 动态加载
        changeLoad(state, value) {
            state.loadState = value
        }
    }
}