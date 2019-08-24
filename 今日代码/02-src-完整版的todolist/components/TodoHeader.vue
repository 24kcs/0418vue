<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="todoName" @keyup.enter="add" />
  </div>
</template>
<script>
export default {
  props: {
    // addTodo: {
    //   type: Function,
    //   require: true // 必须的
    // }
  },
  data() {
    return {
      todoName: "" // 输入的数据
    };
  },
  methods: {
    // 添加操作
    add() {
      // 获取输入内容
      const title = this.todoName.trim();
      if (title) {
        // 创建todo对象
        const todo = {
          id: Date.now(),
          title: title,
          isShow: false
        };
        // 调用方法
        //this.addTodo(todo);
        this.$emit('addTodo',todo)
        // 清空文本框
        this.todoName=''
      }
    }
  }
};
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>