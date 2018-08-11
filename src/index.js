import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './components/Auth';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './actions/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
          <Route exact path="/" component={Auth} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
