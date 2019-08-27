// 需要引入和声明使用
import Vue from 'vue'
import Vuex from 'vuex'
// 声明使用
Vue.use(Vuex)
// 包含多个状态数据的对象
const state = {
  count: 0
}
// 包含了直接修改状态数据的多个方法的对象
const mutations = {
  // 这里可以有多个方法,每个方法就是一个mutation，
  // 一般情况,mutations中放的是同步的方法
  // 加的操作,
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}
// 包含了间接修改状态数据的多个方法的对象
const actions = {
  // 这里可以有多个方法,每个方法就是一个action
  // 一般情况,actions中放的是异步的方法
  increment(context){
    context.commit('INCREMENT')
  },
  // 减
  decrement({commit}){
    commit('DECREMENT')
  },
  // 奇数+
  incrementIfOdd({state,commit}){
    if(state.count%2!==0){
      commit('INCREMENT')
    }
  },
  // 异步的加
  incrementAsync({commit}){
    setTimeout(()=>{
      commit('INCREMENT')
    },1000)
  }

}
// 包含了多个状态数据的计算属性的getter方法的对象
const getters = {
  evenOrOdd(state){
    return state.count%2===0?'偶数':'奇数'
  }
}
// 向外暴露仓库对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

