import React from 'react'
import cx from 'clsx'

const Table = ({ className, ...props }) => (
  <table className={cx(className, 'table')} {...props} />
)

export default Table
