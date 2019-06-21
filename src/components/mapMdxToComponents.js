import React from 'react'
import Table from './Table'
import CodeBlock from './CodeBlock'
import { Button } from 'reactstrap'

export default {
  Button,
  table: Table,
  pre: props => <div {...props} />,
  code: CodeBlock,
  wrapper: ({ children }) => <div children={children} />,
}
