import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter as Router, Route,Routes} from 'react-router-dom';

import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import Home from './Pages/Home/Home.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
)
