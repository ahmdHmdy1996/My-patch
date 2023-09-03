import React, { createContext, useState } from 'react';
import Login from './login';
import Dashboard from './Dashboard';

const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const [auth , setAuth] = useState({});
    console.log(auth);
    
    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {auth.username? <Dashboard/>:   <Login/>}
        </AuthContext.Provider>
    )
}
export default AuthContext;