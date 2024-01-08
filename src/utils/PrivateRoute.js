/* privates define routes for non loged in users */
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  let {user} = useContext(AuthContext); 

  return(
    <Route {...rest}>{!user ? <Navigate to="/login" replace={true} /> : children} </Route>
  )
};

export default PrivateRoute;
