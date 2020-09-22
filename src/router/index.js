import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import List from '../page/list'
import App from '../App' 

const RouterConfig = function(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/list" exact component={List}/>
      </Switch>
    </Router> 
  )
} 

export default RouterConfig