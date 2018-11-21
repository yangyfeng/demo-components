import Vue from 'vue'
import App from './App.vue'
// require('@/v-directive.js')
import VueHotkey from 'v-hotkey-yyf'
Vue.use(VueHotkey)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
