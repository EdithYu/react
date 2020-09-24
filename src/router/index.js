import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import List from '../page/list'
import TestList from '../page/testList'
import App from '../App' 

const RouterConfig = function(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/list" exact component={List}/>
        <Route path="/testlist" exact component={TestList}/>
      </Switch>
    </Router> 
  )
} 

export default RouterConfig