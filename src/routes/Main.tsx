import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Route } from 'react-router-dom';
import { RootState } from 'RootType';

import MainLayout from '../layouts/MainLayout';
import DashBoard from '../routes/DashBoard';
import Setting from '../routes/Setting';
import * as selectors from '../features/auth/state/selectors';
import { getPath } from '../router-paths';
import store from '../store';
import { loadUserAsync } from '../features/auth/state/actions';

const mapStateToProps = (state: RootState) => ({
  user: selectors.getUser(state)
});
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

class Main extends Component<Props> {
  componentDidMount() {
    store.dispatch(loadUserAsync.request());
  }
  
  render() {
    const { user } = this.props;
    return (
      <MainLayout name={user.name}>
      <Route path={getPath('dashboard')}render={DashBoard} />
      <Route path={getPath('setting')} render={Setting} />
    </MainLayout>
    );
  }
}

export default connect(mapStateToProps, {})(Main);
