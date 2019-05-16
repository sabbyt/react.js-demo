import React, {Component} from 'react'

import ButtonComp from './components/Button'
import ModalComp from './components/Modal'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      modalText: ''
    }
  }

  toggleModal () {
    this.setState({ showModal: !this.state.showModal })
  }

  handleButtonPress (modalText) {
    this.setState({
      showModal: true,
      modalText
    })
  }

  render () {
    return (
      <div className='App'>
        <Jumbotron>
          <h1>{'Hello, Engineering'}</h1>
          <p>{'This is your first task!'}</p>
          <p>
            <ButtonComp
              variant={'success'}
              name={'Green'}
              onPress={() => this.handleButtonPress('Green')} />
          </p>
          <p>
            <ButtonComp
              name={'Red'}
              variant={'danger'}
              onPress={() => this.handleButtonPress('Red')} />
          </p>
        </Jumbotron>
        <ModalComp
          title={this.state.modalText}
          body={this.state.modalText}
          show={this.state.showModal}
          hide={() => this.toggleModal()} />
      </div>
    )
  }
}

export default App
