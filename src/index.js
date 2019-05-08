import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Test from './components/test';
import { Provider } from 'react-redux';
import configureReduxStore from './store';
console.log('call to config store ', configureReduxStore());
ReactDOM.render(
  <Provider store={configureReduxStore()}>
    <Router>
      <Switch>
        <Route path="/tester" component={Test} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
