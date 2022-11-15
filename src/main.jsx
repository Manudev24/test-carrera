import React from 'react'
import ReactDOM from 'react-dom/client'
import Test from './Test'
import './index.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
)
