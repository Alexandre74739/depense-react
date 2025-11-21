import { useState, useCallback } from 'react'
import './App.css'
import Compteur from './Compteur'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Suivez vos dépenses du mois</h1> {/* Texte ajusté */}
        <p>Entrez le budget total que vous vous êtes fixé ce mois-ci pour commencer le suivi.</p> {/* Texte ajusté */}
        <Compteur />
      </div>
    </>
  )
}

export default App