

export default {
  // 保存数据的方法
  setTodo(val) {
    localStorage.setItem('todos_key', JSON.stringify(val))
  },
  // 读取数据的方法
  getTodo() {
    return JSON.parse(localStorage.getItem('todos_key') || '[]')
  }
}