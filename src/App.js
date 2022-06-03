import React, { useState } from 'react';
import './style.css';
import Destructuring from './Destructuring';
import Lista from './Lista';
import {ThemeProvider, Container, Row, Col} from 'react-bootstrap'
import Header from './Header'

export default function App() {
  const [items, setItems] = useState([
    { id: 1, desc: 'um', checked: true },
    { id: 2, desc: 'dois', checked: true },
    { id: 3, desc: 'três', checked: false },
  ]);
  let [nome, setNome] = useState('braga');
  const hclick = (e) => {
    setNome(e.target.innerText);
  }
  return (
    <ThemeProvider  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>   
      <Container>
        <Row>
          <Header title={new Date().toLocaleDateString()}/>
        </Row>
        <Row>
           <Col><Lista items={items} setItems={setItems}/></Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}

/*      <h6>{nome}</h6>
      <button onClick={(e) => hclick(e)}>ok</button>
      <Destructuring />*/