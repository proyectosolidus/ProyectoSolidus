import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import Error404 from '../components/Error404'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
