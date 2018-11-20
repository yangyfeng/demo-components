<template lang="pug">
  .app
    HotKey
</template>

<script>
import HotKey from './components/快捷键/HotKey.vue'
export default {
  name: 'app',
  components: {
    HotKey
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,body,#app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
