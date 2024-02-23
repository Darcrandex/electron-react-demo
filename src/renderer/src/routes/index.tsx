/**
 * @name RootRoutes
 * @description
 * @author darcrand
 */

import { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = withSuspense(lazy(() => import('@renderer/pages/Home')))
const About = withSuspense(lazy(() => import('@renderer/pages/About')))
const Notice = withSuspense(lazy(() => import('@renderer/pages/Notice')))
const Todos = withSuspense(lazy(() => import('@renderer/pages/Todos')))
const Counter = withSuspense(lazy(() => import('@renderer/pages/Counter')))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      { path: 'about', element: <About /> },
      { path: 'notice', element: <Notice /> },
      { path: 'todos', element: <Todos /> },
      { path: 'counter', element: <Counter /> }
    ]
  }
]

/**
 * @description 每个路由组件自己处理懒加载
 * @param Component 通过 React.lazy 函数获得的懒加载组件
 */
export function withSuspense(Component: React.LazyExoticComponent<React.FunctionComponent>) {
  const LazyComponent = () => (
    <Suspense
      fallback={
        <section className='py-20 text-center text-3xl text-emerald-600'>Loading...</section>
      }
    >
      <Component />
    </Suspense>
  )

  return LazyComponent
}
