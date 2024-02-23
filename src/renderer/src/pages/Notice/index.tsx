/**
 * @name Notice
 * @description
 * @author darcrand
 */

import { IPCEvents } from '@lib/enums/ipc'

export default function Notice() {
  const ipcHandle = (): void => window.electron.ipcRenderer.send(IPCEvents.Ping)

  return (
    <>
      <h1>Notice</h1>

      <button
        type='button'
        className='m-4 border border-primary p-2 text-primary'
        onClick={ipcHandle}
      >
        Send IPC
      </button>
    </>
  )
}
