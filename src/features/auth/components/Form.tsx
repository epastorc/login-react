import React from 'react';
import { Form, FormikProps, Field, withFormik, ErrorMessage } from 'formik';
import { User } from 'AuthModels';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'RootType';

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
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        backgroundColor: 'white',
        padding: '2%',
        borderRadius: '4px',
        width: '24%',
        height: '24%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    input: {
        width: '98%',
        marginBottom: '15px'
    },
    submit: {
        width: '25%',
        height: '12%',
        backgroundColor: '#f7b500',
        color: 'white',
        border: '0',
        borderRadius: '3px',
        marginTop: '10px',
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
                    {isLoading ? 'Loading' : 'Submit'}
                </button>
                <div>
                    {error && <p className={classes.error}>There are some issues in the login</p>}
                </div>
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
