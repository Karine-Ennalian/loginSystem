import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        const usersStorage = localStorage.getItem('users_db');

        if (userToken && usersStorage) {
            const hasUsers = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

        if (hasUsers) setUser(hasUsers[0]);
        }
    }, []);

    const login = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    
        const hasUser = usersStorage?.filter((user) => user.email === email);
    
        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser({ email, password });
                return;
            } else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuário não está cadastrado";
        }
    };

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    
        const hasUser = usersStorage?.filter((user) => user.email === email);
    
        if (hasUser?.length) {
            return "Já existe uma conta cadastrada com esse e-mail";
        }
    
        let newUser;
    
        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }
    
        localStorage.setItem("users_bd", JSON.stringify(newUser));
    
        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };
    
    return (
        <AuthContext.Provider value={{ user, signed: !!user, login, signup, signout }}>
            {children}
        </AuthContext.Provider>
    );
};