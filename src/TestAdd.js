import React, {useState} from 'react'

const TestAdd = () => {
  const [item, setItem] = useState('ok')
  const [nitem, setNitem] = useState('')
  
  const handleChange = e => {
    setItem(e.target.value)
  }
  const handleClick = () => {
    if(item.length > 0) {
    setNitem(item)
    setItem('')
    } else alert(item)
  }
  return (
    <>
      <input type="text" value={item} onChange={handleChange}/>
      <button onClick={handleClick}>ok</button>
      <h3>{nitem}</h3>
    </>
  )
}

export default TestAdd