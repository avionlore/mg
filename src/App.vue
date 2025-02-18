<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MissionsGenerator />
</template>

<script>
import MissionsGenerator from './components/MissionsGenerator.vue'


export default {
  name: 'App',
  components: {
    MissionsGenerator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
