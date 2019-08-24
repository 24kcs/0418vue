<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo" />
      <TodoList :todos="todos" />
      <TodoFooter :todos="todos" :ischeckAll="ischeckAll">
        <label slot="left">
          <input type="checkbox" v-model="checkAll" />
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
// 引入PubSub
import PubSub from "pubsub-js";
// 引入工具类
import SaveTodos from "./utils.js";
export default {
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
      todos: SaveTodos.getTodos()
    };
  },
  // 监视todos---只要变化就把数据添加到缓存中
  watch: {
    todos: {
      deep: true, // 深度监视
      // handler(val){
      //   // 保存数据
      //   localStorage.setItem('todos_key',JSON.stringify(val))
      // }
      handler: SaveTodos.setTodos
    }
  },
  // 界面加载
  mounted() {
    // 消息订阅并保存token
    this.token = PubSub.subscribe("deleteTodo", (msg, index) => {
      this.deleteTodo(index);
    });
    // 事件总线
    this.$bus.$on("toggleTodo", todo => {
      this.toggleTodo(todo);
    });
  },
  // 销毁vm之前
  beforeDestroy() {
    // 取消消息订阅
    PubSub.unsubscribe(this.token);
    // 干掉事件总线
    this.$bus.$off("toggleTodo");
  },
  // 方法
  methods: {
    // 删除操作
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    // 添加操作
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    // 切换选中操作---权限的问题
    toggleTodo(todo) {
      todo.isShow = !todo.isShow;
    },
    // 全选和全不选
    ischeckAll(checked) {
      this.todos.forEach(todo => {
        todo.isShow = checked;
      });
    }
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