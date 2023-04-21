import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <h2 className=' text-center mt-20'><button className=" btn bg-green-400 loading">loading</button></h2>
    }
    if(user){
        return children;
    }
    return <Navigate to ="/login"></Navigate>
};

export default PrivateRoute;