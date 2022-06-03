import React from 'react'
import { Badge } from 'react-bootstrap';

const Header = props => {
  return <div>
  <h1>
    Lista <Badge bg="secondary">{props.title}</Badge>
  </h1>
  </div>
}

export default Header