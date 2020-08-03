import { RootState } from 'MyTypes';
import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../../auth/selectors';

const mapStateToProps = (state: RootState) => ({
  user: selectors.getUser(state),
});
const dispatchProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const DashBoardContent: React.FC<Props> = ({ user: user = { name: '', password: ''} }) => {
return (
  <div>
    {user.name}
    {user.password}
  </div>
  );
};

export default connect(
  mapStateToProps,
  dispatchProps
)(DashBoardContent);
