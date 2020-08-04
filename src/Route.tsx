import { RootState } from 'MyTypes';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';

import Home from './routes/Home';
import Main from './routes/Main';
import { getPath } from './router-paths';
import PrivateRoute from './components/GuardedRoute';
import * as selectors from './features/auth/selectors';

const mapStateToProps = (state: RootState) => ({
  token: selectors.getToken(state),
});
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

class Routes extends Component<Props, {}> {


  render() {
    return (
      <Switch>
        <Route exact path={getPath('home')} render={Home} />
        <PrivateRoute path={getPath('main')}  isSignedIn={this.props.token !== ''} component={Main} />
        <Route render={() => <div>Page not found!</div>} />
      </Switch>
    );
  }
}
export default connect(mapStateToProps, {})(Routes);