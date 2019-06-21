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
          , this project is on{' '}
          <a href="https://github.com/eckdanny/mdx-love-story-demo">GitHub</a>,
          and a live site is <a href="https://bit.ly/love-mdx-demo">here</a>.
        </span>
      </div>
    </footer>
  )
}

export default Footer
