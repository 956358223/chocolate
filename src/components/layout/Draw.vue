<template>
    <div class="draw">
        <span><i class="el-icon-s-operation" @click="handleDrawsChange"></i></span>
        <el-drawer title="系统布局设置" :with-header="false" :visible.sync="isDrawer" direction="rtl" size="22%"
                   class="drawer">
            <div class="drawer-body">
                <div class="drawer-item">
                    <span class="drawer-title">Aside风格</span>
                    <span style="margin-top: -10px">
                        <el-radio-group @change="handleThemeChange" v-model="isThemes" size="small" fill="#3788ee">
                             <el-radio-button label="light">白色</el-radio-button>
                             <el-radio-button label="night">黑色</el-radio-button>
                        </el-radio-group>
                    </span>
                </div>
                <div class="drawer-item">
                    <span class="drawer-title">开启顶部所有</span>
                    <span> <el-switch v-model="headState" active-color="#3788ee"
                                      @change="handleHeadsChange"></el-switch></span>
                </div>
                <div class="drawer-item">
                    <span class="drawer-title">开启全局搜索</span>
                    <span> <el-switch v-model="isSearch" active-color="#3788ee"></el-switch></span>
                </div>
                <div class="drawer-item">
                    <span class="drawer-title">开启侧边收缩</span>
                    <span> <el-switch v-model="sideState" active-color="#3788ee"
                                      @change="handleAsideChange"></el-switch></span>
                </div>
                <div class="drawer-item">
                    <span class="drawer-title">开启导航标签</span>
                    <span> <el-switch v-model="navsState" active-color="#3788ee"
                                      @change="handleNavsChange"></el-switch></span>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Draw",
        data() {
            return {
                isDrawer: false, // 是否打开抽屉
                isThemes: 'light', // 是否切换主题
                isSearch: false  // 是否开启搜索
            }
        },
        computed: {
            ...mapState({
                headState: state => state.layout.headState
            }),
            ...mapState({
                navsState: state => state.layout.navsState
            }),
            ...mapState({
                sideState: state => state.layout.sideState
            }),
            headState: {
                get() {
                    return this.$store.state.layout.headState
                },
                set(val) {
                    this.$store.commit('changeHead', val)
                }
            },
            navsState: {
                get() {
                    return this.$store.state.layout.navsState
                },
                set(val) {
                    this.$store.commit('changeNavs', val)
                }
            },
            sideState: {
                get() {
                    return this.$store.state.layout.sideState
                },
                set(val) {
                    this.$store.commit('changeSide', val)
                }
            }
        },
        methods: {
            handleDrawsChange() {
                this.isDrawer = true
            },
            handleHeadsChange(val) {
                this.$store.commit('changeHead', val)
                this.handleAsideChange(val)
                this.handleNavsChange(val)
            },
            handleNavsChange(val) {
                this.$store.commit('changeNavs', val)
            },
            handleAsideChange(val) {
                this.$store.commit('changeSide', val)
            },
            handleThemeChange(val) {
                this.$store.commit('changeStyle', val)
            }
        }
    }
</script>

<style scoped lang="scss">
    .drawer {
        font-size: 16px;
        box-sizing: border-box;

        .drawer-body {
            width: 100%;
            padding: 0 16px;
        }

        .drawer-item {
            width: 100%;
            display: flex;
            margin-bottom: 24px;
            justify-content: space-between;
        }

        .drawer-title {
            color: #555;
            text-indent: 5px;
            font-size: 14px;
        }
    }

</style>