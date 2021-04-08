import React, { useRef, useCallback } from 'react'
import { useLocalObservable, observer } from 'mobx-react-lite'
import Head from 'next/head'
import { createTodoStore } from '../stores/TodoListStore'
import TodoMBX from '../components/conunter/TodoMBX'
import { initialData } from '../data/inital-todos'

function MobxTodoList() {
  const store = useLocalObservable(() => createTodoStore(initialData))
  const todoTitle = useRef()

  const addTodo = useCallback(() => {
    const value = todoTitle.current.value
    store.addTodo(value)
    todoTitle.current.value = ''
  }, [store])

  return (
    <div className='container'>
      <Head>
        <title>Counter</title>
      </Head>

      <main className='center-content'>
        <div>
          <div className='todo-list-wrapper'>
            {store.todos.map((todo) => (
              <TodoMBX key={todo.id} todo={todo} />
            ))}
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

export default observer(MobxTodoList)
