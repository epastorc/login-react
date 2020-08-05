import { RootState } from 'RootType';
import { User } from 'AuthModels';
import React from 'react';
import { connect } from 'react-redux';

import { loginUserArticleAsync } from '../state/actions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state: RootState) => ({
    isLoading: state.auth.isLoadingLogin,
    error: state.auth.error,
});

const dispatchProps = {
    createLoginUser: (values: User) =>
        loginUserArticleAsync.request({
            ...values
        })
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const Login: React.FC<Props> = ({ createLoginUser, isLoading, error}) => {
    return (
      
        <LoginForm submit={createLoginUser} isLoading={isLoading} error={error}/>
    );
  };

export default connect(mapStateToProps, dispatchProps)(Login);

