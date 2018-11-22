<template lang="pug">
  .vue-components
    table
      tr.head
        td 序号
        td 组件名字
        td 组件描述
        td 组件git创库地址
      tr(v-for="(itme, index) in components")
        td {{index+1}}
        td {{itme['组件名字']}}
        td {{itme['组件描述']}}
        td
          a(:href="itme['组件git创库地址']", target="_blank") {{itme['组件git创库地址']}}
</template>
<script>
import VueComponents from './components.json'
export default {
  data () {
    return {
      components: VueComponents
    }
  }
}
</script>
<style lang="less" scoped>
.vue-components {
  width: auto;
  margin: .625rem;
  height: auto;
  table {
    width: 100%;
    border: 1px solid #dddddd;
    tr {
      height: 30px;
      &.head td {
        font-weight: bold;
      }
      td {
        padding:0 10px;
        border: 1px solid #dddddd;
        a {
          color: #1351e6;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
