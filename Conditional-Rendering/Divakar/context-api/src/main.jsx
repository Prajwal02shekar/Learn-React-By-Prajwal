import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalContext from './context/GlobalContaxt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <GlobalContext>
    <App />
  </GlobalContext>,
)
