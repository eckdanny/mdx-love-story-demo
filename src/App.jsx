import React from 'react'
import Basics from './basics.mdx'
import { MDXProvider } from '@mdx-js/react'
import mapMdxToComponents from './components/mapMdxToComponents'

const App = () => {
  return (
    <MDXProvider components={mapMdxToComponents}>
      <Basics />
    </MDXProvider>
  )
}

export default App
