<template>
  <div class="aside" :style="{background:viewStyle.background}" v-if="sideState">
    <Logo></Logo>
    <el-menu
        default-active="/home"
        class="el-menu-vertical-demo"
        :text-color="viewStyle.textColor"
        :collapse="collapsed"
        :background-color="viewStyle.background"
        :active-text-color="viewStyle.activeColor"
        unique-opened>
      <template v-for="(menu, index) of routeMenus">
        <el-submenu :key="index+ ''" v-if="Array.isArray(menu.children) && menu.children.length > 0"
                    :index="index+''">
          <template slot="title">
            <i :class="menu.icon"></i>&nbsp;
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item v-for="item in menu.children" :index="item.path" :key="item.path"
                        @click="choiceRoute(item)">
            &nbsp;&nbsp;&nbsp;&nbsp;{{ item.name }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :key="index+''" v-else @click="choiceRoute(menu)" :index="menu.path">
          <i :class="menu.icon"></i>&nbsp;
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import Logo from "./Logo";
import {mapState} from "vuex";

export default {
  name: "Aside",
  components: {Logo},
  computed: {
    collapsed() {
      return this.$store.state.layout.collapsed
    },
    ...mapState({
      viewStyle: state => state.theme.theme
    }),
    ...mapState({
      sideState: state => state.layout.sideState
    }),
    routeMenus() {
      let menus = this.$store.state.layout.routeMenu;
      if (!menus) return [];
      return menus.map(({name, icon, path, auth, children}) => {
        let hasChild = Array.isArray(children) && children.length > 0;
        let data = {path: path, name: name, icon: icon, meta: {auth: auth, title: name}};
        if (hasChild) {
          delete data.path;
          data.children = children.map(({name, icon, path, auth}) => {
            return {path: path, name: name, icon: icon, meta: {auth: auth, title: name}}
          })
        }
        return data
      })
    }
  },
  methods: {
    choiceRoute(val) {
      this.$router.push({path: val.path})
      this.$store.commit('choiceRoute', val)
    }
  }
}
</script>

<style scoped lang="scss">
.aside {
  height: 100%;
}

.el-menu {
  border-right-width: 0;
  border-radius: 0px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}

.el-menu-item:hover {
  outline: 0 !important;
  //background-color: #f0f6ff !important;
  border-right: 4px solid #3788ee;
}

.el-submenu:hover {
  outline: 0 !important;
  background-color: #f0f6ff !important;
}
</style>