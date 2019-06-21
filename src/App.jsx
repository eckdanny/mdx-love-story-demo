import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Layout from './components/Layout'
import mapMdxToComponents from './components/mapMdxToComponents'
import { Routes } from './Routes'

const App = () => {
  return (
    <MDXProvider components={mapMdxToComponents}>
      <Layout>
        <Routes />
      </Layout>
    </MDXProvider>
  )
}

export default App
