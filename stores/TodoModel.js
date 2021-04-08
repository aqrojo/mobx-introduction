import { observable } from 'mobx'

export default function createTodo(parentStore, data) {
  const todo = observable({
    id: data.id,
    title: data.title,
    done: data.done,

    updateTodo(value) {
      todo.done = value
    },

    remove() {
      parentStore.removeTodo(todo)
    }
  })

  return todo
}
