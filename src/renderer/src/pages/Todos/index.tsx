/**
 * @name Todos
 * @description
 * @author darcrand
 */

import { apiCommon } from '@renderer/services/common'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function Todos() {
  const { data, isPending } = useQuery({
    queryKey: ['todos'],
    queryFn: () => apiCommon.todos()
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <h1>Todos</h1>

      {isPending && <p className='text-red-500 text-center'>loading...</p>}

      <ol>{data?.data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ol>
    </>
  )
}
