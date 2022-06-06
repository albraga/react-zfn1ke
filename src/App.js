import React, { useState } from 'react';
import './style.css';
import Destructuring from './Destructuring';
import Lista from './Lista';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import AddItem from './AddItem'

export default function App() {
  const [items, setItems] = useState([
    { id: 1, desc: 'um', checked: true },
    { id: 2, desc: 'dois', checked: true },
    { id: 3, desc: 'três', checked: false },
  ]);
  let [nome, setNome] = useState('braga');
  const hclick = (e) => {
    setNome(e.target.innerText);
  };
  return (
    <>
      <Container className="p-1">
        <Container className="p-1 mb-5 bg-light rounded-3">
          <Row>
            <Header title={new Date().toLocaleDateString()} />
          </Row>
          <Row>
            <Col>
              <Lista items={items} setItems={setItems} />
            </Col>
          </Row>
          <Row>
            <Col>
            <AddItem />
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Footer length={items.length} />
    </>
  );
}

/*      <h6>{nome}</h6>
      <button onClick={(e) => hclick(e)}>ok</button>
      <Destructuring />*/
