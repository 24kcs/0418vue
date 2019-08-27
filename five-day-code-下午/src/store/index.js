// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入各种对象
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 声明使用插件
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
