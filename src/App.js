import React from 'react';
import Header from './components/header'
import SideBar from './components/sidebar'
import Dashboard from './components/dashboard'
import AddProduct from './components/products/addProduct'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
        
        <Router>
        <Header />
        <SideBar />
        <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/addProduct' component={AddProduct}/>
          </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
