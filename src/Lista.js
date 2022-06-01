import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaBeer } from '@react-icons/all-files/fa/FaBeer';

const Lista = () => {
  const [items, setItems] = useState([
    { id: 1, desc: 'um', checked: true },
    { id: 2, desc: 'dois', checked: true },
    { id: 3, desc: 'três', checked: false },
  ]);
  const hchange = id => {
    setItems(items.map(item => (item.id === id ? {...item, checked: !item.checked} : item)))
  }
  return (
    <ListGroup variant="flush">
      {items.map((item) => (
        <ListGroup.Item>
          {item.desc}
          <input type="checkbox" checked={item.checked} onChange={()=>hchange(item.id)} />
            <FaBeer />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Lista;
