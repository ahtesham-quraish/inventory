import React from 'react';
import Header from './components/header'
import SideBar from './components/sidebar'
import Dashboard from './components/dashboard'
import Test from './components/test'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
        
        <Router>
        <Header />
        <SideBar />
        <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/test' component={Test}/>
          </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
