import { sleep } from '@renderer/utils/common'
import { atom, PrimitiveAtom, useAtom } from 'jotai'
import { atomFamily } from 'jotai/utils'
import { useState } from 'react'

const couter = atomFamily<string, PrimitiveAtom<number>>(() => atom(0))

export function useCounter(id = '') {
  const [count, setCount] = useAtom(couter(id))
  const [isLoading, setLoading] = useState(false)

  const inc = () => setCount((c) => c + 1)
  const decSync = async () => {
    setLoading((p) => !p)
    await sleep(1000)
    setCount((c) => c - 1)
    setLoading((p) => !p)
  }

  return { count, inc, decSync, isLoading }
}
