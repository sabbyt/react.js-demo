import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalComp = (props) => <Modal
  show={props.show}
  onHide={() => props.hide()}>
  <Modal.Header closeButton>
    <Modal.Title>{props.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>{props.body}</Modal.Body>
  <Modal.Footer>
    <Button
      variant='secondary'
      onClick={() => props.hide()}>
    Close
    </Button>
  </Modal.Footer>
</Modal>

export default ModalComp
