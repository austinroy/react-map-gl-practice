import React from 'react'
import './App.css'
import Map from  './components/Map'
import SearchableMap from './components/SearchableMap';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <div>
        <div style={{ margin: '0 auto', textAlign: 'center', fontSize: '2rem'}}>
          <a href="/">Show My Location</a> or <a href="/search">Search</a>
        </div>
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
