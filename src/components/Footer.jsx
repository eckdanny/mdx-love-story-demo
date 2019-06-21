import React from 'react'

const Footer = props => {
  return (
    <footer
      className="footer mt-auto py-3"
      style={{ backgroundColor: '#f0f0f0' }}
    >
      <div className="container">
        <span className="text-muted">
          This is demo material from slides:{' '}
          <a target="_blank" href="http://bit.ly/love-mdx">
            Love MDX
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
