export default {
  setTodos(val) {
    localStorage.setItem('todos_key', JSON.stringify(val))
  },
  getTodos() {
    return JSON.parse(localStorage.getItem('todos_key') || '[]')
  }
}