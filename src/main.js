import Vue from 'vue'
import App from './App.vue'
// require('@/v-directive.js')
import VueHotkey from 'v-hotkey-yyf'
import VueDragTree from 'vue-drag-tree'
import 'vue-drag-tree/dist/vue-drag-tree.min.css'

Vue.use(VueDragTree)
Vue.use(VueHotkey)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
