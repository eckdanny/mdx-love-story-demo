import React, { createContext, useContext } from 'react'
import { Router } from '@reach/router'
import GettingStarted from './getting-started'
import Basics from './basics'

const staticRoutes = [
  {
    path: '/',
    name: 'Home',
    component: GettingStarted,
  },
  {
    path: '/basics',
    name: 'Basics',
    component: Basics,
  },
]

export const AppRouteContext = createContext({ staticRoutes })

export const Routes = () => {
  const { staticRoutes } = useContext(AppRouteContext)
  return (
    <Router>
      {staticRoutes.map(({ component: Route, path }) => {
        return <Route key={path} path={path} />
      })}
    </Router>
  )
}
