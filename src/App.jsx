import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Layout from './components/Layout'
import Basics from './basics.mdx'
import mapMdxToComponents from './components/mapMdxToComponents'

const App = () => {
  return (
    <MDXProvider components={mapMdxToComponents}>
      <Layout>
        <Basics />
      </Layout>
    </MDXProvider>
  )
}

export default App
