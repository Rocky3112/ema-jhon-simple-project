import React, { createContext } from 'react';
const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
    const authinfo ={
        displayName:'Rocky'
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;