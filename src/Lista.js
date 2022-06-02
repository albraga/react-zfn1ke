import React, { useState } from 'react';
import { ListGroup, Stack } from 'react-bootstrap';
import { FaTrashAlt } from '@react-icons/all-files/fa/FaTrashAlt';

const Lista = () => {
  const [items, setItems] = useState([
    { id: 1, desc: 'um', checked: true },
    { id: 2, desc: 'dois', checked: true },
    { id: 3, desc: 'três', checked: false },
  ]);
  const hchange = id => {
    setItems(items.map(item => (item.id === id ? {...item, checked: !item.checked} : item)))
  }
  const hdel = id => {
    setItems(items.filter(item => item.id !== id))
  }
  return (
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item>
          <Stack direction="horizontal" gap={3}>
            
            <div className="bg-light border "><input type="checkbox" checked={item.checked} onChange={()=>hchange(item.id)} /></div>
            <div className="bg-light border"><label onDoubleClick={() => hchange(item.id)}>{item.desc}</label></div>
            <div className="bg-light border  ms-auto"><FaTrashAlt onClick={() => hdel(item.id)} role="button"/></div>
          </Stack>          
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Lista;
