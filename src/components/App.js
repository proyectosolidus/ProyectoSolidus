import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import Error404 from './Error404'
import Layout from './Layout'

const App = () => {
  return (
    <BrowserRouter>
	  	<Layout>
      		<Switch>
	        	<Route exact path="/" component={Home}/>
	        	<Route exact component={Error404} />
      		</Switch>
	    </Layout>
    </BrowserRouter>
  )
}

export default App;
