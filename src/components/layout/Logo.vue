<template>
  <div class="logo" :style="{color:theme.logoColor}">
    <div class="shrink" v-if="collapsed">{{ title.shrink }}</div>
    <div class="expand" v-else>{{ title.expand }}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Logo",
  data() {
    return {
      profile: require('../../assets/img/letter.jpg'),
    }
  },
  computed: {
    ...mapState({
      title: state => state.layout.title
    }),
    ...mapState({
      theme: state => state.theme.theme
    }),
    collapsed() {
      return this.$store.state.layout.collapsed
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  height: 60px;
  min-width: 64px;
  max-width: 240px;
  display: flex;
  align-items: center;
  border-radius: 0px;
  justify-content: center;
  transition: color .2s ease;

  .expand {
    font-weight: 500;
    font-size: 20px;
  }

  .shrink {
    font-weight: 700;
    font-size: 20px;
    transition: all .2s ease-in-out;
  }
}
</style>