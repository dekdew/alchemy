<template>
  <div id="app">
    <pot/>
    <game/>
  </div>
</template>

<script>
import Pot from './components/Pot'
import Game from './components/Game'

export default {
  name: 'app',
  components: {
    Pot,
    Game,
    
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
