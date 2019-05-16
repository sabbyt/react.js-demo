import React, { Component } from 'react'

class Greeting extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'MP'
    }
  }

  changeName (event) {
    const value = event.target.value
    this.setState({ name: value })
  }

  render () {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <input
          type='text'
          name='name'
          onChange={(event) => this.changeName(event)}
        />
      </div>
    )
  }
}
export default Greeting

// const Greeting = (props) => `Hello ${props.name}`

// export default Greeting
