import React, { useState } from 'react'
import { FaBeer } from "@react-icons/all-files/fa/FaBeer"

const Lista = () => {
  const [items, setItems] = useState([
    { id: 1, desc: 'um', checked: true },
    { id: 2, desc: 'dois', checked: true },
    { id: 3, desc: 'três', checked: false },
  ]);
  const hchange = () => console.log('checked');
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.desc}
          <input type="checkbox" checked={item.checked} onChange={hchange} />
          <h3><FaBeer /></h3>
        </li>
      ))}
    </ul>
  );
};

export default Lista;
