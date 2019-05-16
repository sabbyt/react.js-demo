import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const ColoredPage = props => <Jumbotron>
  <h1 style={{color: props.location.state.color}}>{props.location.state.title}</h1>
</Jumbotron>

export default ColoredPage
