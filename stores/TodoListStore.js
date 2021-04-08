import createTodo from './TodoModel'
import { observable } from 'mobx'

export function createTodoStore(initialData = []) {
  const store = observable({
    todos: [],

    // actions
    initStore(data) {
      store.todos = data.map((todo) => createTodo(store, todo))
    },
    removeTodo(todo) {
      store.todos.remove(todo)
    },

    addTodo(title) {
      store.todos.push(
        createTodo(store, {
          id: Date.now(),
          title,
          done: false
        })
      )
    },
    get completed() {
      return store.filter.map((todo) => todo.done).length
    }
  })

  store.initStore(initialData)

  return store
}
