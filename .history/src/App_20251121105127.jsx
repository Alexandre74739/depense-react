import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <compteur />
    </div>
      
    </>
  )
}

export default App
