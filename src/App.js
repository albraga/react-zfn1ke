import React, { useState } from 'react';
import './style.css';
import Destructuring from './Destructuring';
import Lista from './Lista';

export default function App() {
  let [nome, setNome] = useState('braga');
  const hclick = (e) => {
    setNome(e.target.innerText);
  }
  return (
    <div>
      <h6>{nome}</h6>
      <button onClick={(e) => hclick(e)}>ok</button>
      <Destructuring />
      <Lista />
    </div>
  )
}
