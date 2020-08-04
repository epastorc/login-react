import React from 'react';
import { Form, FormikProps, Field, withFormik, ErrorMessage } from 'formik';
import { User } from 'AuthModels';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'MyTypes';

import { loginUserArticleAsync } from '../actions';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
        padding: '2%',
        border: '1px solid grey',
        borderRadius: '4px',
        width: '15%'
    },
    input: {
        width: '98%',
        marginBottom: '15px'
    },
    submit: {
        width:'100%',
        marginTop: '10px'
    },
    error: {
        margin: '0',
        color: 'red'
    }
  }));
  

type FormValues = Pick<User, 'name' | 'password'> & {};

const mapStateToProps = (state: RootState) => ({
    isLoading: state.auth.isLoadingLogin,
    error: state.auth.error,
  });

const dispatchProps = {
    createLoginUser: (values: FormValues) =>
        loginUserArticleAsync.request({
            ...values
        })
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps & {
    user?: User;
};

const InnerForm: React.FC<Props & FormikProps<FormValues>> = props => {
    const { isSubmitting, dirty, isLoading, error } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            <Form className={classes.form}>
            <div>
                {error && <p className={classes.error}>There are some issues in the login</p>}
            </div>
                <div >
                    <label htmlFor="name">Login</label>
                    <br />
                    <Field
                        className={classes.input}
                        name="name"
                        placeholder="Email"
                        component="input"
                        type="text"
                        required
                        autoFocus
                    />
                    <ErrorMessage name="name" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <Field
                        className={classes.input}
                        name="password"
                        placeholder="Password"
                        component="input"
                        required
                        type="password"
                    />
                    <ErrorMessage name="password" />
                </div>
                <button className={classes.submit} type="submit" disabled={!dirty || isSubmitting}>
                    {isLoading ? 'Loading' : 'Submit'  }
        </button>
            </Form>
        </div>
    );
};

export default compose(
    connect(
        mapStateToProps,
        dispatchProps
    ),
    withFormik<Props, FormValues>({
        enableReinitialize: true,
        // initialize values
        mapPropsToValues: ({ user: data }) => ({
            name: (data && data.name) || '',
            password: (data && data.password) || '',
        }),
        handleSubmit: (values, form) => {
            //form.props.createLoginUser(values);
            form.props.createLoginUser(values);
            form.setSubmitting(false);
        },
    })
)(InnerForm);
