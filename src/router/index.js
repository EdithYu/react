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
// import BMap from '../components/map'
import App from '../App'

const RouterConfig = function (props) {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/testlist' exact component={TestList} />
        <Route path='/testleftlist' exact component={TestLeftList} />
        <Route path='/testrightlist' exact component={TestRightList} />
        <Route path='/testrightlist' exact component={TestRightList} />
        {/* <Route path='/map' exact component={BMap} /> */}
      </Switch>
    </Router>
  )
}

export default RouterConfig
