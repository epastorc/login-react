import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'MyTypes';
import Main from '../layouts/Main';
import DashBoardContent from '../features/main/dashboard/components/DashBoard';
import * as selectors from '../features/auth/selectors';

const mapStateToProps = (state: RootState) => ({
  user: selectors.getUser(state)
});
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const DashBoard: FC<Props> = ({ user: user = { name: '', password: ''} }) => (
  <Main name={user.name}>
    <DashBoardContent />
  </Main>
);

export default connect(mapStateToProps, {})(DashBoard);
