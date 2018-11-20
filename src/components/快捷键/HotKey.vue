<template lang='pug'>
  .HotKey
    .title 输入Ctrl + Enter
    .input-box
      input(v-hotkey="{fn:keyhandler, keyList:keyList}")
</template>

<script>

export default {
  data () {
    return {
      // 按键顺序的keyCode值
      keyList: [17, 13]
    }
  },
  methods: {
    keyhandler () {
      alert('注册了快捷键Ctrl + Enter')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
