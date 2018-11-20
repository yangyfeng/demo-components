module.exports = {
  /* vue-cli3 项目配置文件 */

  /*
  基本路径
  默认情况下，我们假设您的应用程序将部署在域的根上
  例如：https://www.my-app.com/
  如果应用程序部署在子路径上，则需要指定
  这里的子路径，例如，如果应用程序部署在 https://www.foobar.com/my-app/
  然后把这个变成 '/my-app/'
  例如：https://www.example.com/project/v1.1/index.html
  baseUrl 为 /project/v1.1/
  baseUrl: process.env.NODE_ENV === 'production' ? '/online/' : '/'
  */
  baseUrl: '/',

  // 输出文件目录
  // 在npm run build时 生成文件的目录 type:string, default:'dist'
  outputDir: 'dist',

  /*
  构建多页时使用
  index: {
    // 入口
    entry: 'src/index/main.js',
    // 模板
    template: 'public/index.html',
    // output as dist/index.html
    filename: 'index.html'
  }
  */
  pages: { type: Object, Default: undefined },

  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下
  assetsDir: 'assets',

  // 指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
  indexPath: 'index.html',

  /*
  如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
  lintOnSave: process.env.NODE_ENV !== 'production
  eslint-loader eslint检查,是否在保存的时候检查
  lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  */
  lintOnSave: true,

  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,

  /*
  使用编译器生成全在浏览器
  是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
  https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  */
  runtimeCompiler: false,

  /*
  babel-loader在默认情况下跳过`node_modules`模块
  显式地使用此选项来转换依赖项
  默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  */
  transpileDependencies: [ /* string or regex */ ],

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  /*
  调整内部webpack配置
  see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  */
  chainWebpack: () => {},

  /*
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
  */
  configureWebpack: () => {},

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },

  // 在生产中使用Babel＆TS thread-loader
  // 默认情况下，如果机器有超过1个内核
  parallel: require('os').cpus().length > 1,

  // PWA（渐进式WEB应用） 插件相关配置 https://segmentfault.com/a/1190000012353473
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 它支持webPack-dev-server的所有选项
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
  devServer: {
    // 主机名
    host: process.env.HOST || 'localhost',
    // 端口号
    port: process.env.PORT || 8080,
    // 是否支持https安全访问
    https: false,
    // 配置自动启动浏览器 process.platform === 'darwin'
    open: true,
    // 热更新（webpack已实现了，这里false即可）
    hotOnly: false,
    compress: true,
    /*
    配置跨域处理,只有一个代理
    proxy: 'http://localhost:4000'
    配置多个代理
    {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
    */
    proxy: null,
    // 请求之前
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
