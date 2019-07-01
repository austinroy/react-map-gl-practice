import React from 'react'
import './App.css'
import Map from  './components/Map'
import SearchableMap from './components/SearchableMap';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <div>
        <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Map} />
            <Route exact path="/search" component={SearchableMap} />
        </Switch>
        </BrowserRouter>
      </div>
  )
}

export default App
