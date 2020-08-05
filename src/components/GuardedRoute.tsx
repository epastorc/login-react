
import  React from  "react";
import { Route, Redirect } from  "react-router";

const  PrivateRoute: React.FC<{
        component: any;
        path: string;
        isSignedIn: boolean;
    }> = (props) => {
    const condition = props.isSignedIn;
    return condition ? (<Route  path={props.path} component={props.component} />) : 
    (<Redirect  to="/"  />);
};
export  default  PrivateRoute;