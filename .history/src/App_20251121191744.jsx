import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-4" style={{ backgroundImage: 'url(/src/assets/img-background.jpg)' }}>
<div className="backdrop-blur-xl bg-white/20 shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center border border-white/30">
<h1 className="text-4xl font-bold mb-4 text-white drop-shadow">Suivez vos dépenses du mois</h1>
<p className="text-white/90 mb-8">Gérez facilement vos dépenses et suivez votre évolution en temps réel.</p>


<div className="bg-white/30 rounded-xl p-6 shadow-lg border border-white/40 flex flex-col items-center">
<span className="text-5xl font-bold text-white mb-4">{count} €</span>
<div className="flex gap-4">
<button onClick={() => setCount(count + 1)} className="px-6 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-semibold shadow-md">+ Ajouter</button>
<button onClick={() => setCount(count - 1)} className="px-6 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition text-white font-semibold shadow-md">- Retirer</button>
</div>
</div>
</div>
</div>
    </div>
      
    </>
  )
}

export default App
