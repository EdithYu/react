import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'

import TestContractionBox from '@/page/TestContractionBox'
import Home from '@/page/Home'
import NoMatch from '@/page/common/NoMatch'
import TestVirtualTable from '../page/TestVirtualTable'
import TestDragList from '../page/TestDragList'



const RouterConfig = function () {
  return (
    <Router>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/testcontractionbox' exact component={TestContractionBox} />
          <Route path='/testvirtualtable' exact component={TestVirtualTable} />
          <Route path='/testdraglist' exact component={TestDragList} />
          <Route path="*" component={NoMatch}></Route>
      </Switch>
    </Router>
  )
}

export default RouterConfig
