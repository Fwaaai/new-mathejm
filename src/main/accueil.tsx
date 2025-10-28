import React from 'react'
import ReactDOM from 'react-dom/client'
import '/index.css'               // Tailwind CSS
import Accueil from '../pages/accueil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Accueil />
  </React.StrictMode>
)