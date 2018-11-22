const webpack = require('webpack')
module.exports = {
  lintOnSave: true,

  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ]
  }
}
