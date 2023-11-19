import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

// Wrap the App Component with the Router Component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)