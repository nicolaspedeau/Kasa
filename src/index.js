import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import "./styles/css/style.css"

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(<BrowserRouter>
    <App/>
  </BrowserRouter>
  )
