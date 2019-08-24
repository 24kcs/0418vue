// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue
import Vue from 'vue'
// 引入的是App组件
import App from './App'
// 干掉启动后的提示信息
Vue.config.productionTip = false

// 创建Vue的实例对象
/* eslint-disable no-new */
new Vue({
  // 查找容器
  el: '#app',
  // 组件的注册
  components: { App },
  // 模版
  template: '<App/>'
})
