import React from 'react'
import { Badge } from 'react-bootstrap';

const Header = props => {
  return <div>
  <h1>
    {props.titulo} <Badge bg="secondary">{props.title}</Badge>
  </h1>
  </div>
}

Header.defaultProps = {
  titulo: 'List'
}

export default Header