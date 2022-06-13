import React, { useState } from 'react'
import './style.css'
import Destructuring from './Destructuring'
import Lista from './Lista'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import AddItem from './AddItem'
import TestAdd from './TestAdd'
import Search from './Search'

export default function App() {
  const [items, setItems] = useState([
    { id: 1, desc: 'um', checked: true },
    { id: 2, desc: 'dois', checked: true },
    { id: 3, desc: 'três', checked: false },
  ])

  const [search, setSearch] = useState('')

  const [newItem, setNewItem] = useState('')

  const addItem = item => {
    const id = items.length ? items[items.length -1].id + 1 : 1
    const myNewItem = {id, desc: item, checked: false}
    const listItems = [...items, myNewItem]
    setItems(listItems)
  }
  const hsubmit = e => { 
    e.preventDefault()
    addItem(newItem)
  }
  return (
    <>
    <Search search={search} setSearch={setSearch} />
      <Container className="p-1">
        <Container className="p-1 mb-5 bg-light rounded-3">
          <Row>
            <Header title={new Date().toLocaleDateString()} />
          </Row>
          <Row>
            <Col>
              <Lista setItems={setItems} items={
                items.filter(
                  item => ((item.desc).toLowerCase()).includes(
                    search.toLowerCase()
                    )
                )
              } />
            </Col>
          </Row>
          <Row>
            <Col>
            <AddItem newItem={newItem} setNewItem={setNewItem} hsubmit={hsubmit}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <TestAdd />
      <Footer length={items.length} />
    </>
  );
}

/*      <h6>{nome}</h6>
      <button onClick={(e) => hclick(e)}>ok</button>
      <Destructuring />*/
