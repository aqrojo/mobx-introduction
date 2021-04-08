import { observable } from 'mobx'

export default function CounterStore() {
  const counter = observable({
    times: 0,
    plus() {
      counter.times += 1
    },
    minus() {
      counter.times -= 1
    }
  })
  return counter
}
