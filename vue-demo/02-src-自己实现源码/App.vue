<template>
  <div>
    <p>勇哥好</p>
    <Hello />
  </div>
</template>
<script>
// 引入Hello组件
import Hello from "./components/Hello.vue";
// 向外暴露对象
export default {
  // 可不写
  name: "App",
  // 注册子组件
  components: {
    Hello
  }
}
</script>
<style scoped>
p {
  color: red;
}
</style>
