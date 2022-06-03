import React, { useState } from 'react';
import { ListGroup, Stack, Alert } from 'react-bootstrap';
import { FaTrashAlt } from '@react-icons/all-files/fa/FaTrashAlt';

const Lista = ({setItems, items}) => {
  
  const hchange = id => {
    setItems(items.map(item => (item.id === id ? {...item, checked: !item.checked} : item)))
  }
  const hdel = id => {
    setItems(items.filter(item => item.id !== id))
  }
  return (
    items.length ? (
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item>
          <Stack direction="horizontal" gap={3}>
            
            <div className="bg-light border "><input type="checkbox" checked={item.checked} onChange={()=>hchange(item.id)} /></div>
            <div className="bg-light border"><label style={item.checked ? {textDecoration: 'line-through'} : null} onDoubleClick={() => hchange(item.id)}>{item.desc}</label></div>
            <div className="bg-light border  ms-auto"><FaTrashAlt onClick={() => hdel(item.id)} role="button"/></div>
          </Stack>          
        </ListGroup.Item>
      ))}
    </ListGroup>
    ) : <Alert key='info' variant='info'>
          Your list is empty.
        </Alert>
  )
}

export default Lista;
