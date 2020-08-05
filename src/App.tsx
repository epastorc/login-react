import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { loadUserAsync } from './features/auth/state/actions';
import store, { history } from './store';
import Routes from './Route';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUserAsync.request());
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

