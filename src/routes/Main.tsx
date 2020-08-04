import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'MyTypes';
import MainLayout from '../layouts/MainLayout';
import DashBoard from '../routes/Dashboard';
import Setting from '../routes/Setting';
import * as selectors from '../features/auth/selectors';
import {  Route } from 'react-router-dom';
import { getPath } from '../router-paths';
import store from '../store';
import { loadUserAsync } from '../features/auth/actions';

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
