import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../axios"
import { AppError } from "../utils/AppError";

const AuthContext = createContext({});


function AuthContextProvider({ children }) {

    const [user, setUser] = useState();

    const userLocalStorage = "@orangeJuice:user"
    const tokenLocalStorage = "@orangeJuice:token";
    const infoLoginLocalStorage = "@orangeJuice:login"

    function setLocalStorageInfo(user, token, infoLogin) {
        localStorage.setItem(userLocalStorage, JSON.stringify(user));
        localStorage.setItem(tokenLocalStorage, JSON.stringify(`Bearer ${token}`));
        localStorage.setItem(infoLoginLocalStorage, JSON.stringify(infoLogin))
    };

    function getItemLocalStorage() {
        const user = localStorage.getItem(infoLoginLocalStorage);

        const userParseJson = user ? JSON.parse(user) : {
            email: "",
            password: ""
        }

        console.log("eu sou o user => ", userParseJson)

        return userParseJson;
    };

    async function signln(email, password) {

        try {
            const response = await api.post("/sessions/signln", { email, password });

            setUser(response.data);

            console.log("eu sou token => ", response.data.token)

            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

            const infoLogin = {
                email,
                password
            }

            setLocalStorageInfo(response.data.user, response.data.token, infoLogin);

        } catch (error) {
            throw new AppError("Não foi possivel efetuar o login", 400)
        }

    };

    async function signup(name, email, password) {
        try {
            await api.post("/sessions/signup", { name, email, password })
            signln(email,password);

        } catch (error) {
            throw new AppError("Não foi possivel criar conta", 400)
        }
    };
    
    function logout(){
        setUser();
        localStorage.removeItem(infoLoginLocalStorage)
   
    }

    useEffect(() => {
        const user = getItemLocalStorage();
        signln(user.email,user.password)

    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            signup,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth() {
    const data = useContext(AuthContext);
    return data;
};

export { AuthContextProvider, useAuth }
