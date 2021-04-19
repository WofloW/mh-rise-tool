import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom"
import Randoms from './pages/randoms'


import './App.css'


export default function App() {
  return (
    <Router basename={'/salmonrun-rotation-static'}>
      <div className="App">
        <Randoms/>
      </div>
    </Router>
  )
}

