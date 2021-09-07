<template>
  <el-container class="layout">
    <el-aside :width="collapsed ? '240' : '70'">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header v-if="headState" :style="headStyle">
        <Head></Head>
      </el-header>
      <el-header class="tabs" v-if="navsState">
        <div class="tabs-nav">
          <Navb></Navb>
        </div>
      </el-header>
      <el-main>
        <!--        <div class="el-content">-->
        <router-view/>
        <!--        </div>-->
        <!--        <div class="el-copyright" v-if="headState">-->
        <!--          <span class="copyright-title">&copy; 2020.02.02 v3.0</span>-->
        <!--        </div>-->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "../components/layout/Aside";
import Head from "../components/layout/Head";
import Navb from "../components/layout/Navb";
import {mapState} from "vuex";

export default {
  name: "Layout",
  components: {Navb, Aside, Head},
  methods: {},
  computed: {
    ...mapState({
      headStyle: state => state.theme.headStyle
    }),
    collapsed() {
      return this.$store.state.layout.collapsed
    },
    navsState() {
      return this.$store.state.layout.navsState
    },
    headState() {
      return this.$store.state.layout.headState
    }
  }
}
</script>


<style scoped lang="scss">
.layout {
  height: 100%;
}

.el-menu-left .el-menu-item:hover {
  outline: 0 !important;
  background-color: #E9EEF3 !important;
}

.el-menu-right .el-menu-item:hover {
  outline: 0 !important;
  background-color: #E9EEF3 !important;
}

.el-header {
  //background: indianred;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1)
}

.el-aside {
  background: #fff;
  overflow-y: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
}

.el-main {
  //background: #f3f6f8;
  background: #f5f7f9;
}

.el-content {
  height: 680px;
}

.tabs {
  overflow: hidden;
  border-radius: 0px;
  padding: 0px !important;
  background: #f3f6f8;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: -10px;
}

.el-copyright {
  margin-top: 20px;
  height: 50px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;

  .copyright-title {
    color: rgba(0, 0, 0, .45);
  }
}
</style>