import http from "../http";
import vuex from "../store";

/**
 * 用户菜单
 * @param router
 * @param store
 */
// export const initMenu = (router, store) => {
//     if (vuex.state.layout.routeMenu.length === 0) {
//         http.get('/auth/menu').then(response => {
//             if (response && response.status == 200) {
//                 store.commit('routerMenus', response.data.data);
//             }
//         })
//     }
// }

export const initMenu = (router, store) => {
    let routerMenus = [
        {
            "id": 1,
            "name": "首页管理",
            "url": "/",
            "path": "/home",
            "component": "index/Home",
            "icon": "el-icon-house",
            "auth": 1,
            "sort": 1,
            "enabled": true,
            "type": 0,
            "pid": 0,
            "createTime": "Jun 27, 2020 1:54:03 PM",
            "modifyTime": "Jun 27, 2020 1:54:09 PM",
            "children": []
        },
        {
            "id": 2,
            "name": "权限管理",
            "url": "/",
            "path": "/",
            "component": "Layout",
            "icon": "el-icon-medal",
            "auth": 1,
            "sort": null,
            "enabled": true,
            "type": 0,
            "pid": 0,
            "createTime": "Jun 27, 2020 1:54:03 PM",
            "modifyTime": "Jun 27, 2020 1:54:09 PM",
            "children": [
                {
                    "id": 11,
                    "name": "用户管理",
                    "url": "/user/search",
                    "path": "/user",
                    "component": "grant/User",
                    "icon": null,
                    "auth": 1,
                    "sort": null,
                    "enabled": true,
                    "type": 0,
                    "pid": 2,
                    "children": [
                        {
                            "id": 3,
                            "name": "应用部署",
                            "url": "/",
                            "path": "/deploy",
                            "component": "index/Deploy",
                            "icon": "el-icon-reading",
                            "auth": 1,
                            "sort": 1,
                            "enabled": true,
                            "type": 0,
                            "pid": 0,
                            "createTime": "Jun 27, 2020 1:54:03 PM",
                            "modifyTime": "Jun 27, 2020 1:54:09 PM",
                            "children": []
                        },
                    ]
                },
                {
                    "id": 12,
                    "name": "角色管理",
                    "url": "/role/search",
                    "path": "/role",
                    "component": "grant/Role",
                    "icon": null,
                    "auth": 1,
                    "sort": null,
                    "enabled": true,
                    "type": 0,
                    "pid": 2,
                    "children": []
                },
                {
                    "id": 13,
                    "name": "资源管理",
                    "url": "/auth/search",
                    "path": "/auth",
                    "component": "grant/Auth",
                    "icon": null,
                    "auth": 1,
                    "sort": null,
                    "enabled": true,
                    "type": 0,
                    "pid": 2,
                    "children": []
                }
            ]
        },
        {
            "id": 3,
            "name": "应用部署",
            "url": "/",
            "path": "/deploy",
            "component": "index/Deploy",
            "icon": "el-icon-reading",
            "auth": 1,
            "sort": 1,
            "enabled": true,
            "type": 0,
            "pid": 0,
            "createTime": "Jun 27, 2020 1:54:03 PM",
            "modifyTime": "Jun 27, 2020 1:54:09 PM",
            "children": []
        },
    ]
    store.commit('routerMenus', routerMenus);
}

