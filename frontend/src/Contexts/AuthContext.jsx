import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

const user = {
    name: "Kayky monstro",
    email: "KaykyBross@gmail.com"
}

function AuthContextProvider({children}){

    return(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth(){
    const data = useContext(AuthContext);

    return data;
};

export { AuthContextProvider, useAuth }
