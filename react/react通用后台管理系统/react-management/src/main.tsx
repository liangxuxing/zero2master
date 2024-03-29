import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
// import './assets/styles/global.scss'
import '@/assets/styles/global.scss'
// import App from './App'
import BaseRouter from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BaseRouter />
  </React.StrictMode>
)
