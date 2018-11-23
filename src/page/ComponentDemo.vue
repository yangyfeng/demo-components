<template lang="pug">
  .demo
    .item
      .demo-title 1.快捷键
      HotKey
    .item
      .demo-title 2.时间选择器
      Datepicker
    .item
      .demo-title 3.文件上传(拖拽)
      FileUpload
    .item
      .demo-title 4.拖拽菜单
</template>
<script>
import HotKey from './../components/HotKey'
import FileUpload from './../components/FileUpload'
import Datepicker from './../components/Datepicker'
import DrapTree from './../components/DrapTree'
export default {
  components: {
    HotKey,
    Datepicker,
    FileUpload,
    DrapTree
  }
}
</script>
<style lang="less" scoped>
.item {
  width: 100%;
  height: auto;
  margin: 10px 0;
}
.demo-title {
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  margin: 5px 0;
}
</style>
