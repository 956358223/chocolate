<template>
  <el-card shadow="never">
    <pre>
       [
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
                    "children": []
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
                    "url": "/auth/tree",
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
        }]
    </pre>
  </el-card>
</template>

<script>
export default {
  name: "Auth"
}
</script>

<style scoped>

</style>