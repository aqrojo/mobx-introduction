import { useCallback } from 'react'

export default function Todo({ data, onChange, onRemove }) {
  const handleRemove = useCallback(() => {
    onRemove(data)
  }, [onChange, data])

  const handleChange = useCallback(
    ({ target }) => {
      onChange({ ...data, done: target.checked })
    },
    [onChange, data]
  )

  return (
    <div className={`todo ${data.done && 'done'}`}>
      <label>
        <input type='checkbox' defaultChecked={data.done} onClick={handleChange} />{' '}
        <span>{data.title}</span>
      </label>
      {data.done && <button onClick={handleRemove}>x</button>}
    </div>
  )
}
