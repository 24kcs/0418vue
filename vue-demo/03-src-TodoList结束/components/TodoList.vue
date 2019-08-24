<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :index="index"  />
  </ul>
</template>
<script>
// 引入TodoItem组件
import TodoItem from "./TodoItem.vue";
export default {
  //props可以实现组件之间的传值,父级传子级组件的方式,目前props是数组的写法,
  props: ['todos'],
  components: {
    TodoItem
  }

 
};
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>