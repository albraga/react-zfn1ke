import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {FaPlus} from '@react-icons/all-files/fa/FaPlus'

const AddItem = () => {
  return(
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Item</Form.Label>
    <Form.Control type="text" placeholder="Add item" />
  </Form.Group>
  <Button className="verde" variant="primary" type="submit">
    <FaPlus />
  </Button>
</Form>
  )
}

export default AddItem

