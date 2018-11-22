<template lang="pug">
  .fileupload
    FileUpload.upload(ref="upload",
    v-model="files",
    @input-file="inputFile",
    @input-filter="inputFilter",
    :drop="true") 上传文件
</template>
<script>
import FileUpload from 'vue-upload-component'
export default {
  components: {
    FileUpload
  },
  data () {
    return {
      files: []
    }
  },
  methods: {
    /**
     * Has changed
     * @param  Object|undefined   newFile   只读
     * @param  Object|undefined   oldFile   只读
     * @return undefined
     */
    inputFile: function (newFile, oldFile) {
      alert('文件上传成功')
    },
    /**
     * Pretreatment
     * @param  Object|undefined   newFile   读写
     * @param  Object|undefined   oldFile   只读
     * @param  Function           prevent   阻止回调
     * @return undefined
     */
    inputFilter: function (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // 过滤不是图片后缀的文件
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          alert('只能上传图片')
          return prevent()
        }
      }
      // 创建 blob 字段 用于图片预览
      newFile.blob = ''
      let URL = window.URL || window.webkitURL
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .fileupload {
    width: 400px;
    height:100px;
    background: #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    .upload {
      display: block;
      width: 100px;
      height: 30px;
      background: #ffffff;
      line-height: 30px;
      text-align: center;
    }
  }
</style>
