import { useState } from 'react'
import { Widget } from './components/Widget'

/*
interface ParProps {
  text: string
  salve: string
}

function Paragraph(props : ParProps) {

  return <button className='bg-blue-500 hover:bg-blue-800 p-2 py-3 rounded text-white transition-colors'>{props.text +' '+ props.salve}</button>
}

function App() {
  return (
    <div className='flex gap-2'>

      <h1>Olá mundo!</h1>

      <Paragraph text='alo' salve='mundo'/>
      <Paragraph text='bom dia' salve='NUM CLICA'/>
    </div>
  )
}

*/

function App() {
  return <Widget/>
}

export default App
