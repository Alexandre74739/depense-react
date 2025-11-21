import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <h1>Suivez vos dépense dans le mois</h1>
      <compteur />
    </div>
      
    </>
  )
}

export default App
