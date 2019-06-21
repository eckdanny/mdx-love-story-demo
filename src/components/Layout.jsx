import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <main className="flex-shrink-0 container">{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
