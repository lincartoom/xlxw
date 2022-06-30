import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 有两处检查代码
// webpack开发服务器(在下面终端重)+eslint插件，在保存时检查代码
// vscode+eslint插件+工作区根目录下.eslintrc.js配置,在保存时检查代码

// 如果排查出现问题，
// 1.ESLint插件右下角设置中 ->扩展设置
// 2.
