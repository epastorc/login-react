
import  React from  "react";
import { Route } from  "react-router";

const  PrivateRoute: React.FC<{
        component: any;
        path: string;
        isSignedIn: boolean;
    }> = (props) => {

    const condition = props.isSignedIn;
    return (<Route  path={condition ? props.path: '/login'} component={props.component} />);
};
export  default  PrivateRoute;