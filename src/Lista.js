import React, {useState} from 'react'

const Lista = () => {
  const [items, setItems] = useState([
    {id: 1, desc: 'um'},
    {id: 2, desc: 'dois'},
    {id: 3, desc: 'três'}
  ])
  return (
    <ul>
    {items.map(item => <li>{item.desc}</li>)}
    </ul>
  )
}

export default Lista