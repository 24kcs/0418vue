// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 注册路由器
  router
})

/**
 * 路由: 前端路由,在页面指定位置可以进行跳转或者局部刷新的操作的一个锚点(链接,地址),就是一个链接
 * 注册路由器
 * 
 */