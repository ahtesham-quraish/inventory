import React from 'react';
import Header from './components/header';
import SideBar from './components/sidebar';
import Dashboard from './components/dashboard';
import AddProduct from './components/products/addProduct';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  return (
    <React.Fragment>
      <Router>
        <Header />
        <SideBar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addProduct" component={AddProduct} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state,
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
