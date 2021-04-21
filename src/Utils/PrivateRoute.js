import React from "react";
import { Redirect } from "react-router-dom";
import TokenService from "../services/token-service";

function PrivateRoute(props) {
  return (
    
    TokenService.hasAuthToken() 
      ? props.children 
      : <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location.pathname },
          }}
      />  
  );

}

export default PrivateRoute;
