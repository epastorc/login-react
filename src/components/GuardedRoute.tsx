
import  React from  "react";
import { Route, Redirect } from  "react-router";

type Props = {
    component: any;
    path: string;
    isSignedIn: boolean;
  };

const  GuardedRoute: React.FC<Props> = (props) => {
    const { component: Component, isSignedIn, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(routeProps) =>
                isSignedIn ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    );
};
export  default  GuardedRoute;