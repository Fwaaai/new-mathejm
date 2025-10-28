import React from 'react'
import ReactDOM from 'react-dom/client'
import '/index.css'               // Tailwind CSS
import Chap1 from '../pages/chap1'
import Sidebar from '../components/sidebar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sidebar />
    <Chap1 />
  </React.StrictMode>
)