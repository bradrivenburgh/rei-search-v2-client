import React from "react";
import { Redirect } from "react-router-dom";
import TokenService from "../services/token-service";

function PublicOnlyRoute(props) {
  return (
    TokenService.hasAuthToken() 
      ? <Redirect to="/" />  
      : props.children 
  ); 
}

export default PublicOnlyRoute;