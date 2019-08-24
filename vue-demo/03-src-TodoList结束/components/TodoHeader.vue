<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
  </div>
</template>
<script>
export default {

  // props: {
  //   addTodo: {
  //     type: Function,
  //     require: true //必须的
  //   }
  // },
  data() {
    return {
      title: "" // 文本框中的数据
    };
  },
  methods: {
    add() {
      const title = this.title.trim();
      // 判断
      if (title) {
        // 调用addTodo方法
        const todo = {
          id: Date.now(),
          title: title,
          isShow: false
        };
        //this.addTodo(todo);
        // 分发事件---触发
        this.$emit('addTodo',todo)
        this.title = "";
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