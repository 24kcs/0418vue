// 配置路由

// 引入Vue
import Vue from 'vue'
// 引入Vue-Router
import VueRouter from 'vue-router'


import routes from './routes'
// 声明使用插进
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes
})
