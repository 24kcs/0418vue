// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// import MintUI from 'mint-ui'
import { Button,Field } from 'mint-ui'

Vue.component(Button.name, Button);


Vue.component(Field.name, Field);
// 实例化
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册组件
  components: {
    App
  },
  template: '<App/>'
})



