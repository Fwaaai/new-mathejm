import React from 'react'
import ReactDOM from 'react-dom/client'
import '/index.css'               // Tailwind CSS
import Accueil from '../pages/accueil'
import Sidebar from '../components/sidebar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sidebar />
    <Accueil />
  </React.StrictMode>
)