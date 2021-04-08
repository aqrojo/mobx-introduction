import { observer, useLocalObservable } from 'mobx-react-lite'
import CounterStore from '../../stores/CounterStore'

export default observer(function CounterMBX() {
  const counter = useLocalObservable(CounterStore)
  return (
    <div className='counter'>
      <div className='time'>{counter.times}</div>
      <div className='controls'>
        <button onClick={counter.plus}>+</button>
        <button onClick={counter.minus}>-</button>
      </div>
    </div>
  )
})
