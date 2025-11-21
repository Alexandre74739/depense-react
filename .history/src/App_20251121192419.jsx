import { useState, useCallback } from 'react'
import './App.css'
import Compteur from 'Compteur'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Suivez vos dépense dans le mois</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptas?</p>
        <Compteur />
      </div>
    </>
  )
}

export default App
