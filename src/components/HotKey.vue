<template lang='pug'>
  .hotkey
    h3 输入 ctrl+enter
    <input v-hotkey="{keymap:keymap,isfull: false}" v-show="showing" />
</template>

<script>
export default {
  data () {
    return {
      showing: true
    }
  },
  methods: {
    keymaphandler () {
      alert('111')
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
</style>
