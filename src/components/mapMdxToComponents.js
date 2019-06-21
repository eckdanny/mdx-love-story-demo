import React from 'react'
import Table from './Table'
import CodeBlock from './CodeBlock'

export default {
  table: Table,
  pre: props => <div {...props} />,
  code: CodeBlock,
}
