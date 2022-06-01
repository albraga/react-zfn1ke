//https://www.youtube-nocookie.com/embed/NIq3qLaHCIs

import React from 'react'

const Destructuring = () => {
  const alfa = ['a1','b2','c3','d4','e5','f6']
  const nume = ['1','2','3','4','5','6']
  const [,,c, ...spreado] = alfa
  const alfanume = [...alfa, ...nume]
  const pessoa = {
    nome: 'Braga',
    rg: 676614,
    cpf: 7742409313
  }
  const {rg: rgnum} = pessoa

  return(
    <>
    <h6>{c}</h6>
    <h6>{spreado}</h6>
    <h6>{alfanume}</h6>
    <h6>{rgnum}</h6>
    </>
  )
}


export default Destructuring