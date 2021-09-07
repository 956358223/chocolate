<template>
  <header>
    <div class="left">
      <el-button type="text" @click="handleCollapse" v-if="sideState">
        <i :class="{'el-icon-s-unfold':!collapsed,'el-icon-s-fold':collapsed}"
           style="font-size: 21px;"></i>
      </el-button>
      <el-breadcrumb separator="/" v-if="sideState">
        <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path : crumbMenu.path}" v-if="crumbMenu">{{ crumbMenu.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-tooltip effect="light" placement="bottom" content="刷新">
        <el-button type="text" icon="el-icon-refresh" @click="handleRefresh"></el-button>
      </el-tooltip>
      <el-tooltip effect="light" placement="bottom" content="布局">
        <el-button type="text">
          <Draw></Draw>
        </el-button>
      </el-tooltip>
      <el-tooltip effect="light" placement="bottom" content="通知">
        <el-button type="text" icon="el-icon-bell"></el-button>
      </el-tooltip>
      <el-tooltip effect="light" placement="bottom" content="文档">
        <el-button type="text" icon="el-icon-reading"></el-button>
      </el-tooltip>
      <el-tooltip effect="light" placement="bottom" content="建议">
        <el-button type="text" icon="el-icon-help"></el-button>
      </el-tooltip>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <div>
               <el-avatar :size="36">
                   <div v-if="principal.username.length>2">{{ principal.username.substring(1) }}</div>
                   <div v-else>{{ principal.username }}</div>
               </el-avatar>
          </div>
          <div class="dropdown-title">
               {{ principal.username }}<i class="el-icon-arrow-down el-icon--right"></i>
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user" command="details">个人信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-edit-outline" command="change">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-upload2" command="logout">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
import Draw from "./Draw";

export default {
  name: "Head",
  components: {Draw},
  inject: ['reload'],
  data() {
    return {
      profile: require('../../assets/img/profile.png'),
    }
  },
  computed: {
    ...mapState({
      crumbMenu: state => state.layout.crumbMenu
    }),
    sideState() {
      return this.$store.state.layout.sideState
    },
    collapsed() {
      return this.$store.state.layout.collapsed
    },
    principal() {
      return this.$store.state.principals
    }
  },
  methods: {
    handleRefresh() {
      this.reload();
    },
    handleCollapse() {
      this.$store.commit('setCollapse')
    },
    handleCommand(cmd) {
      if (cmd == 'logout') this.$router.replace('/logon')
    },
  }
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #fff;
  justify-content: space-between;

  .menu {
    font-size: 20px;
  }
}

.left {
  display: flex;
  align-items: center;

  .el-button {
    margin-right: 20px;
  }
}

.right {
  display: flex;
  float: right;

  .el-button {
    font-size: 20px;
    margin-right: 30px;
  }

  .el-dropdown {
    margin: 0;
    font-size: 16px;
    cursor: pointer;
    align-items: center;
    display: flex;
  }

  .el-avatar {
    margin: -5px 8px 0 5px;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    box-sizing: border-box;
    border: 1px solid #eee;
    vertical-align: middle;
  }

  .el-dropdown-link {
    line-height: 60px;
    display: flex;
  }
}
</style>