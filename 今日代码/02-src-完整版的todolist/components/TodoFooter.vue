<template>
  <div class="todo-footer">
    <slot name="left"/>
    <slot name="center"/>
    <slot name="right"/>
  </div>
</template>
<script>
export default {
  props: {
    todos: Array,
    ischeckAll: Function
  },
  computed: {
    // 个数
    count() {
      return this.todos.reduce((pre, todo) => pre + (todo.isShow ? 1 : 0), 0);
    },
    // 全选和全不选
    checkAll: {
      get() {
        return this.todos.length === this.count && this.count > 0;
      },
      set(val) {
        this.ischeckAll(val);
      }
    }
  }
};
</script>
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>