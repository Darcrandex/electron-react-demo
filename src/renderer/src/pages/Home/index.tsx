/**
 * @name Home
 * @description
 * @author darcrand
 */

import { cls } from '@renderer/utils/cls'
import { NavLink, Outlet } from 'react-router-dom'

const navs = [
  { name: 'About', path: '/about' },
  { name: 'Notice', path: '/notice' },
  { name: 'Todos', path: '/todos' },
  { name: 'Counter', path: '/counter' }
]

export default function Home() {
  return (
    <>
      <h1 className='m-4 text-3xl'>Home</h1>

      <nav className='m-2 flex space-x-4'>
        {navs.map((nav) => (
          <NavLink
            key={nav.path}
            to={nav.path}
            className={({ isActive }) =>
              cls(
                'p-2 cursor-pointer transition-all',
                isActive ? 'text-primary' : 'text-gray-500 hover:text-primary'
              )
            }
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>

      <hr className='my-4' />

      <Outlet />
    </>
  )
}
