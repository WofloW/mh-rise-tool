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
  // {/*<Router basename={'/mh-rise-tool'}>*/}
  return (
    <Router>
      <div className="App">
        <Randoms/>
      </div>
    </Router>
  )
}

