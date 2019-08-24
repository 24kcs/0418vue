<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo" />
      <TodoList :todos="todos" />
      <TodoFooter :todos="todos" :checkAll="checkAll">
        <label slot="left">
          <input type="checkbox" v-model="isChecked" />
        </label>
        <span slot="center">
          <span>已完成{{count}}</span>
          / 全部{{todos.length}}
        </span>
        <button slot="right" class="btn btn-danger" v-show="count>0">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>
<script>
// 当前这个父级组件中,引入三个子级组件
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
// 通过消息订阅,实现删除todo的功能
import PubSub from "pubsub-js";
import StoreTodo from "./utils.js";
export default {
  // 界面加载后
  mounted() {
    // 第一个参数:消息---事件的名字
    // 第二个参数:回调函数
    // 坑=================================================================
    var token = PubSub.subscribe("deleteTodo", (msg, index) => {
      // 删除操作
      this.deleteTodo(index);
    });

    // 绑定事件
    this.$bus.$on("toggleTodo", todo => {
      this.toggleTodo(todo);
    });

    // Vue和vm vm.__proto__===Vue.prototype
    // App对象__proto__.__proto__===vm.__proto__
    // console.log(this.__proto__.__proto__===Vue.prototype)
  },
  name: "App",
  // 注册组件
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  // 和之前的data中的写法一样
  data() {
    return {
      // todos: [
      //   { id: 1, title: "奔驰", isShow: false },
      //   { id: 2, title: "宝马", isShow: true },
      //   { id: 3, title: "奥拓", isShow: false }
      // ]
      // todos:JSON.parse(localStorage.getItem('todos_key')||'[]')
      todos: StoreTodo.getTodo()
    };
  },
  methods: {
    // 删除数据的操作
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    // 添加数据的操作
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    // 选中, 传入一个选项,设置该选项是否被选中
    toggleTodo(todo) {
      todo.isShow = !todo.isShow;
    },
    // 是否全选的操作
    checkAll(isCheck) {
      // 遍历数组中每个数据,设置isShow为true或者是false
      this.todos.forEach(todo => {
        todo.isShow = isCheck;
      });
    }
  },
  watch: {
    // 数据变化,就要做相关的操作---缓存操作
    todos: {
      deep: true, // 深度监视
      // 方法
      // handler(val) {
      //   // 保存的是相关的数据val---就是要保存的数据
      //   // 进行缓存
      //   localStorage.setItem("todos_key", JSON.stringify(val));
      // }
      // handler(val){
      //   StoreTodo.setTodo(val)
      // }
      handler: StoreTodo.setTodo
    }
  },

  computed: {
    // 勾选的个数
    count() {
      return this.todos.reduce((pre, todo) => pre + (todo.isShow ? 1 : 0), 0);
    },
    isChecked: {
      get() {
        return this.todos.length === this.count && this.count > 0;
      },
      set(val) {
        this.checkAll(val);
      }
    }
  }

  // 组件之间通信,可以使用props--->父传子,自定义事件----->父传子
};
</script>
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>