import { RootState } from 'RootType';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import Home from './routes/Home';
import Main from './routes/Main';
import { getPath } from './router-paths';
import PrivateRoute from './components/GuardedRoute';
import * as selectors from './features/auth/selectors';

const mapStateToProps = (state: RootState) => ({
  user: selectors.getUser(state),
  isSignedIn: selectors.isSignedIn(state),
});
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

class Routes extends Component<Props> {
  render() {
    const { isSignedIn }  = this.props;
    return (
      <div>
        <Route exact path={getPath('home')} render={Home} />
        <PrivateRoute path={getPath('main')}  isSignedIn={isSignedIn} component={Main} />
      </div>
    );
  }
}
export default connect(mapStateToProps, {})(Routes);