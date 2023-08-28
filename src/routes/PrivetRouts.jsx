import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRouts = ({children}) => {
  const {user,loading} = useContext(Authcontext);

    const location = useLocation();
    console.log(location);
    if(loading){
      return  <Spinner animation="border" variant="primary" />
    }
 

   
  if(user) {
    return children;
  }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivetRouts;




