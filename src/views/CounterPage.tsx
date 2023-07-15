import { useCountStore } from '@/store'

export default function CounterPage() {
  const count = useCountStore(state => state.count)
  const increment = useCountStore(state => state.increment)
  const decrement = useCountStore(state => state.decrement)
  return (
    <>
      <div className="text-red text-lg">{count}</div>
      <div className="mt-4 flex gap-2">
        <button className="btn" onClick={ increment }>+1</button>
        <button className="btn bg-amber" onClick={ decrement }>-1</button>
      </div>
    </>
  )
}
