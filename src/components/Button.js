import React from 'react'
import Button from 'react-bootstrap/Button'

const ButtonComp = props => <Button
  variant={props.variant}
  onClick={() => props.onPress()}>
  {props.name}
</Button>

export default ButtonComp
