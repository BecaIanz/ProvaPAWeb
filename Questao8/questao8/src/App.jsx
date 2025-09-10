import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // useEffect(() => {
  //   console.log(`o contador agora esta em ${count}`)
  // },[count])

  return (
    <>
    <div className='all'>
      <div className='column'>
        <div className='square1'>
          <h1>Contador</h1>
          <div className='counter'>
            <button className='button-count' onClick={() => setCount(count => count + 1)}>+</button>
            <div className='count'>{count}</div>
            <button className='button-count' onClick={() => setCount(count => count - 1)}>-</button>
          </div>

        </div>

        <div className='square2'>

        </div>
      </div>

      <div className='column'>
        <div className='square3'>
          
        </div>

        <div className='square4'>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
