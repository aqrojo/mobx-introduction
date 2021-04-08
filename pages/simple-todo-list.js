import React, { useCallback, useRef, useState } from 'react'
import Head from 'next/head'
import Todo from '../components/conunter/Todo'
import { initialData } from '../data/inital-todos'

function createTodo(title) {
  return { id: Date.now(), title, done: false }
}

export default function SimpleTodoList() {
  const [todoList, setTodoList] = useState(initialData)
  const todoTitle = useRef()

  const addTodo = useCallback(() => {
    const value = todoTitle.current.value
    setTodoList((list) => [...list, createTodo(value)])
    todoTitle.current.value = ''
  }, [setTodoList])

  const removeTodo = useCallback(
    (todo) => setTodoList((list) => list.filter((item) => todo.id !== item.id)),
    [setTodoList]
  )

  const updateTodo = useCallback(
    (todo) =>
      setTodoList((list) =>
        list.map((item) => (item.id === todo.id ? todo : item))
      ),
    [setTodoList]
  )

  const completed = todoList.filter((todo) => todo.done).length

  return (
    <div className='container'>
      <Head>
        <title>Counter</title>
      </Head>

      <main className='center-content'>
        <div>
          <div className='todo-list-wrapper'>
            {todoList.map((data) => (
              <Todo
                key={data.id}
                data={data}
                onChange={updateTodo}
                onRemove={removeTodo}
              />
            ))}
            {completed > 0 && (
              <div className='todos-counter'>
                Tareas completadas {completed}
              </div>
            )}
          </div>

          <div className='controls'>
            <input type='text' ref={todoTitle} />
            <button onClick={addTodo}>new TODO</button>
          </div>
        </div>
      </main>
    </div>
  )
}
