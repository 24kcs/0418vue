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
    <button class="btn btn-danger" v-show="state" @click="deleteItem">删除</button>
  </li>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
  props: {
    // 设置接收过来的todo的类型
    todo: Object,
    index: Number
  },
  data() {
    return {
      bgColor: "white",
      fontColor: "black",
      state: false
    };
  },
  methods: {
    // 鼠标进入和离开事件
    mouseHandle(flag) {
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
    deleteItem() {
      // 提示
      if (confirm("确定要删除吗")) {
        PubSub.publish('deleteTodo', this.index);
        //this.deleteTodo(this.index);
      }
    }
  },
  // 计算属性
  computed: {
    isCompleted:{
      get(){
        return this.todo.isShow
      },
      set(val){
        // this.toggleTodo(this.todo)
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
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>