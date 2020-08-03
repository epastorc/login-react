import React from 'react';
import { Form, FormikProps, Field, withFormik, ErrorMessage } from 'formik';
import { User } from 'AuthModels';
import { compose } from 'redux';
import { connect } from 'react-redux';
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
        borderRadius: '4px'
    },
    submit: {
        width:'100%',
        marginTop: '10px'
    }
  }));
  

type FormValues = Pick<User, 'name' | 'password'> & {};

const dispatchProps = {
    createLoginUser: (values: FormValues) =>
        loginUserArticleAsync.request({
            ...values
        })
};

type Props = typeof dispatchProps & {
    user?: User;
};

const InnerForm: React.FC<Props & FormikProps<FormValues>> = props => {
    const { isSubmitting, dirty } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Form className={classes.form}>
                <div >
                    <label htmlFor="name">Login</label>
                    <br />
                    <Field
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
                        name="password"
                        placeholder="Password"
                        component="input"
                        required
                        type="password"
                    />
                    <ErrorMessage name="password" />
                </div>

                <button className={classes.submit} type="submit" disabled={!dirty || isSubmitting}>
                    {isSubmitting ? 'Loading' : 'Submit'  }
        </button>
            </Form>
        </div>
    );
};

export default compose(
    connect(
        null,
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
