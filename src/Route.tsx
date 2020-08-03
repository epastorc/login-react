import { RootState } from 'MyTypes';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';

import Home from './routes/Home';
import DashBoard from './routes/DashBoard';
import { getPath } from './router-paths';
import PrivateRoute from './components/GuardedRoute';
import * as selectors from './features/auth/selectors';

const mapStateToProps = (state: RootState) => ({
    user: selectors.getUser(state),
  });
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

class Routes extends Component<Props, {}> {
  
  
    render() {
      return (
        <Switch>
        <Route exact path={getPath('home')} render={Home} />
        <PrivateRoute exact path={getPath('dashboard')} isSignedIn={this.props.user.name !== ''} component={DashBoard} />
        <Route render={() => <div>Page not found!</div>} />
      </Switch>
      );
    }
  }
export default connect(mapStateToProps, {})(Routes);