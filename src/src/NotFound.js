import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'

import ButtonComp from '../components/Button'

const NotFound = props => <Jumbotron>
  <h1>{'Page not found'}</h1>
  <Link to={'/'} >
    <ButtonComp
      variant={'success'}
      name={'Go Home'}
      onPress={() => -1} />
  </Link>
</Jumbotron>

export default NotFound
