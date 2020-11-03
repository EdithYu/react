import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'

import TestList from '../page/testList'
import TestLeftList from '../page/testLeftList'
import TestRightList from '../page/testRightList'
import TestVirtualTable from '../page/testVirtualTable'
// import BMap from '../components/map'
import Calculator from '../components/calculator'

import App from '../App'

const RouterConfig = function (props) {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/testlist' exact component={TestList} />
        <Route path='/testleftlist' exact component={TestLeftList} />
        <Route path='/testrightlist' exact component={TestRightList} />
        <Route path='/testVirtualTable' exact component={TestVirtualTable} />
        <Route path='/testCalculator' exact component={Calculator} />
        {/* <Route path='/map' exact component={BMap} /> */}
      </Switch>
    </Router>
  )
}

export default RouterConfig
