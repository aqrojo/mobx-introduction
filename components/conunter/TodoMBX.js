import { useCallback } from 'react'
import { observer } from 'mobx-react-lite'

function Todo({ todo }) {
  const handleChange = useCallback((e) => todo.updateTodo(e.target.checked), [
    todo
  ])

  return (
    <div className={`todo ${todo.done && 'done'}`}>
      <label>
        <input type='checkbox' defaultChecked={todo.done} onClick={handleChange} />{' '}
        <span>{todo.title}</span>
      </label>
      {todo.done && <button onClick={todo.remove}>x</button>}
    </div>
  )
}

export default observer(Todo)
