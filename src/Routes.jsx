import React, { createContext, useContext } from 'react'
import { Router } from '@reach/router'
import GettingStarted from './getting-started'
import Basics from './basics'
import Composing from './composing/composing'
import WritingDocs from './docs/writing-docs'

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
  {
    path: '/composing',
    name: 'Composing',
    component: Composing,
  },
  {
    path: '/writing-docs',
    name: 'Writing Docs',
    component: WritingDocs,
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
