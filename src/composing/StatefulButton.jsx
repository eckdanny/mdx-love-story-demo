import React, { useState, useCallback } from 'react'
import { Button } from 'reactstrap'

const COLORS = ['primary', 'secondary', 'success', 'info', 'warning', 'danger']

const getNextColor = color => {
  const currIndex = COLORS.indexOf(color)
  return currIndex < COLORS.length - 1 ? COLORS[currIndex + 1] : COLORS[0]
}

const StatefulButton = () => {
  const [currColor, setCurrColor] = useState('primary')
  const handleClick = useCallback(() =>
    setCurrColor(prev => getNextColor(prev))
  )
  return (
    <Button color={currColor} onClick={handleClick}>
      {currColor}
    </Button>
  )
}

export default StatefulButton
