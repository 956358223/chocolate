<template>
    <div class="tabs">
        <el-tag v-for="x in navsMenus" :key="x.name" :closable="x.path!=='/home'" :disable-transitions="false"
                @close="handleClose(x)" @click="handleClick(x)"
                :color="$route.path  === x.path || $route.path  === '/' ? 'white':'#f3f6f8'"
                effect="plain" type="info">
            <i :class="x.icon ? x.icon : 'el-icon-edit-outline'"></i>&nbsp;{{x.name}}
        </el-tag>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: "Navb",
        computed: {
            ...mapState({
                navsMenus: state => state.layout.navsMenus
            }),
        },
        methods: {
            ...mapMutations({
                spliceRoute: 'spliceRoute'
            }),
            handleClose(tag) {
                let index = this.navsMenus.findIndex(x => x.name === tag.name)
                this.spliceRoute(tag)
                if (this.navsMenus[index]) this.$router.push({path: this.navsMenus[index].path})
                else this.$router.push({path: this.navsMenus[index - 1].path})
            },
            handleClick(val) {
                if (this.$router.currentRoute.name != val.name) {
                    this.$router.push({path: val.path})
                }
                this.$store.commit('choiceRoute', val)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs {
        cursor: pointer;
        overflow: hidden;

        .el-tag {
            margin-top: 13px;
            z-index: 2;
            width: 140px;
            text-align: center;
            font-size: 14px;
            justify-content: center;
            color: #2F2F2F;
            background: #f3f6f8;
            border: none;
            border-radius: 8px 8px 0 0;
            padding: 2px;
        }
    }

    .el-tag:hover {
        outline: 0 !important;
        background-color: white !important;
    }

    .el-tag:visited {
        outline: 0 !important;
        background-color: white !important;
    }

    .el-tabs {
        position: relative;
        z-index: 2;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
</style>