<template>
  <div id="app">
    哈哈
    <HelloWorld/>
  </div>
</template>

<script>

// 引入组件
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  // 注册
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
