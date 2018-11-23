<template lang="pug">
  .app
    .tabs
      button(@click="showDemo = false", :class="{active:!showDemo}") Vue常用组件集合
      button(@click="showDemo = true", :class="{active:showDemo}") 常用组件DEMO
    .components(v-if="!showDemo")
      .title Vue2.*组件库总结
      Components
    .demo(v-else)
      .title 组件DEMO
      Demos
</template>

<script>
import Components from './page/VueComponents'
import Demos from './page/ComponentDemo'
export default {
  data () {
    return {
      showDemo: false
    }
  },
  components: {
    Components,
    Demos
  }
}
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
}
html,
body {
  line-height: 1;
  font-size: 12px;
  width: 100%;
  height: 100%;
}
ol,
ul {
  list-style: none;
}
:focus {
  outline: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: #999;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #999;
  cursor: pointer;
}
a:hover,
a:active {
  color: #cc0000;
}
.clear {
  clear: both;
}
.hide {
  display: none;
}
.app {
  width: auto;
  margin: 20px;
  .title {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
  }
  .tabs {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      display: block;
      width: 150px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      font-size: 14px;
      color: #999;
      background: #eeeeee;
      margin: 0 20px;
      cursor: pointer;
      border-radius:5px; 
      &.active,&:hover {
        color: #f90;
      }
    }
  }
}
</style>
