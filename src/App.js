import React, { useState } from 'react';
import './style.css';
import Destructuring from './Destructuring';
import Lista from './Lista';
import {ThemeProvider, Container, Row, Col} from 'react-bootstrap'

export default function App() {
  let [nome, setNome] = useState('braga');
  const hclick = (e) => {
    setNome(e.target.innerText);
  }
  return (
    <ThemeProvider  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>   
      <Container fluid="md">
        <Row>
           <Col><Lista /></Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}

/*      <h6>{nome}</h6>
      <button onClick={(e) => hclick(e)}>ok</button>
      <Destructuring />*/