/**
 * @name Versions
 * @description
 * @author darcrand
 */

import { useState } from 'react'

export default function Versions() {
  const [versions] = useState(window.electron.process.versions)

  return (
    <>
      <ul className='space-y-2 list-disc pl-8'>
        <li>Electron v{versions.electron}</li>
        <li>Chromium v{versions.chrome}</li>
        <li>Node v{versions.node}</li>
      </ul>
    </>
  )
}
