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
import TestVideo from '../page/TestVideo'
import TestImageList from '../page/TestImageList'
import TestPlayer from '../page/TestPlayer'

const RouterConfig = function () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/testcontractionbox' exact component={TestContractionBox} />
        <Route path='/testvirtualtable' exact component={TestVirtualTable} />
        <Route path='/testvideo' exact component={TestVideo} />
        <Route path='/testimagelist' exact component={TestImageList} />
        <Route path='/testplayer' exact component={TestPlayer} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
