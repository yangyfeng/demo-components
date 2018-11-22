<template lang='pug'>
  .hotkey
    h3 输入 ctrl+enter
    <input v-hotkey="{keymap:keymap,isfull: false}" v-model="val" />
</template>

<script>
export default {
  data () {
    return {
      val: ''
    }
  },
  methods: {
    keymaphandler () {
      this.val = '执行回调'
    }
  },
  computed: {
    keymap () {
      return {
        'ctrl+enter': this.keymaphandler
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  height: 30px;
  line-height: 30px;
}
input {
  display: block;
  width: 100%;
  height: 25px;
  line-height: 25px;
}
</style>
