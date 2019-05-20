<template>
  <div v-if="show" id="app">
    <pot :rnd="rnd"/>
    <game @clicked="onClickChild" @rerender="rerender"/>
    <smoke :show="smoke" :rnd="rnd"/>
  </div>
</template>

<script>
import Pot from './components/Pot'
import Game from './components/Game'
import Smoke from './components/Smoke'

export default {
  name: 'app',
  components: {
    Pot,
    Game,
    Smoke
  },
  data() {
    return {
      show: true,
      rnd: 2,
      smoke: null
    }
  },
  methods: {
    onClickChild(value) {
      this.rnd = value[0]
      this.smoke = value[1]
    },
    rerender(value) {
      if (value) {
        this.show = false
        this.$nextTick(() => {
          this.show = true
          this.$nextTick()
        })
      }
    }
  }
}
</script>

<style>
#app {
  background-image: url('assets/bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}
</style>
