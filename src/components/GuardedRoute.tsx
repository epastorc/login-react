
import  React from  "react";
import { Route, Redirect } from  "react-router";

type Props = {
    component: any;
    path: string;
    isSignedIn: boolean;
  };

const  GuardedRoute: React.FC<Props> = (props) => {
    const condition = props.isSignedIn;
    return condition ? (<Route  path={props.path} component={props.component} />) : 
    (<Redirect  to="/"  />);
};
export  default  GuardedRoute;