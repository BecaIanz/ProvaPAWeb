import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [view, setView] = useState(false)
  
  return (
    <>
    <div className='all'>
      <div className='column'>
        {/* Letra A */}
        <div className='square1'>
          <h1>Contador</h1>
          <div className='counter'>
            <button className='button-count' onClick={() => setCount(count => count + 1)}>+</button>
            <div className='count'>{count}</div>
            <button className='button-count' onClick={() => setCount(count => count - 1)}>-</button>
          </div>
        </div>

        {/* Letra B */}
        <div className='square2'>
          <h1>Digite um texto</h1>
          <input className='input' type="text" id='text' onChange={(e) => setText(e.target.value)}/>
          <h2>Texto Digitado: </h2>
          <h3>{text}</h3>
        </div>
      </div>

      <div className='column'>
        {/* Letra C */}
        <div className='square3'>
          <button className='button-view' onClick={() => setView((view) => !view)}>Clique Aqui</button>
          {
            view && <div className='element'>Boomm!!</div>
          }
        </div>
        <div className='square4'>
          <h1>Corriga com Carinho, não foi facil!!</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
