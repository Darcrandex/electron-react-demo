/**
 * @name Counter
 * @description
 * @author darcrand
 */

import { useCounter } from '@renderer/stores/counter'

export default function Counter() {
  const { isLoading, count, inc, decSync } = useCounter()
  return (
    <>
      <h1>Counter</h1>

      <p>count: {count}</p>

      <button className='px-2 border' disabled={isLoading} onClick={inc}>
        +
      </button>

      <button className='px-2 border' disabled={isLoading} onClick={decSync}>
        -
      </button>
      {isLoading && <p>loading...</p>}
    </>
  )
}
