<template>
  <li
    :style="{backgroundColor:bgColor,color:fontColor}"
    @mouseenter="mouseHandle(true)"
    @mouseleave="mouseHandle(false)"
  >
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="state" @click="del">删除</button>
  </li>
</template>
<script>
import PubSub from "pubsub-js";
export default {
  props: {
    // 设置接收过来的todo的类型
    todo: Object,
    index: Number,
    toggleTodo: Function
  },
  data() {
    return {
      bgColor: "white",
      fontColor: "black",
      state: false
    };
  },
  // 方法
  methods: {
    mouseHandle(flag) {
      // 判断
      if (flag) {
        // 进入
        this.bgColor = "pink";
        this.fontColor = "green";
        this.state = true;
      } else {
        // 离开
        this.bgColor = "white";
        this.fontColor = "black";
        this.state = false;
      }
    },
    // 删除操作
    del() {
      if (confirm("确定删除吗")) {
       // this.deleteTodo(this.index);
      PubSub.publish('deleteTodo',this.index);
      }
    }
  },
  // 计算属性
  computed: {
    // 是否选中
    isCompleted: {
      get() {
        return this.todo.isShow;
      },
      set(val) {
        // 选中的操作----计算属性
        // this.toggleTodo(this.todo);

        this.$bus.$emit('toggleTodo',this.todo)
      }
    }
  }
};
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>