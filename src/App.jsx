import { useState } from 'react'
import './App.css'
import Evento from './componentes/Evento'
import Galeria from './componentes/Galeria'
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cabecalho />
    <Evento 
    titulo={'Evento do Senai'}
    descricao={'descricao do evento'}
    horario={'horario do evento'}
    local={'local do evento'}
    />
    <Galeria />
    <Rodape />
    </>
    
  )
}

export default App
