import React, {Component} from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Home from './src/Home'
import NotFound from './src/NotFound'
import ColoredPage from './src/ColouredPage'
import ShowColorPage from './src/ShowColourPage'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blue' component={ColoredPage} />
            <Route path='/yellow' component={ColoredPage} />
            <Route path='/show-color/:color' component={ShowColorPage} />
            <Route exact path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
