import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'

import ButtonComp from '../components/Button'
import ModalComp from '../components/Modal'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      modalText: '',
      color: 'black'
    }
  }

  toggleModal () {
    this.setState({ showModal: !this.state.showModal })
  }

  handleButtonPress (modalText) {
    this.setState({
      showModal: true,
      modalText,
      color: modalText.toLowerCase()
    })
  }

  render () {
    console.log('INITIAL STATE', this.state)
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
          <p>
            <Link
              to={{
                pathname: '/blue',
                state: { color: this.state.color, title: 'Blue' }
              }}>
              <ButtonComp
                name={'Blue'}
                variant={'primary'}
                onPress={() => -1} />
            </Link>
          </p>
          <p>
            <Link
              to={{
                pathname: '/yellow',
                state: { color: this.state.color, title: 'Yellow' }
              }}>
              <ButtonComp
                name={'Yellow'}
                variant={'warning'}
                onPress={() => -1} />
            </Link>
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

export default Home
