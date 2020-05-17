import React, {createContext, useCallback, useState, useContext} from 'react';

import api from '../services/api';

interface SignCredentials {
    email: string,
    password : string;
}

interface AuthContextDate {
    user: object,
    SignIn(credentials : SignCredentials) : Promise<void>,
    SignOut() : void;
};

interface AuthState {
    token : string,
    user: object;
}

const AuthContext = createContext<AuthContextDate>({} as AuthContextDate);

export const AuthProvider : React.FC = ({children}) => {

    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@GoBarber:token');
        const user = localStorage.getItem('@GoBarber:user');

        console.log(user)

        if(token && user){
            return {token, user : JSON.parse(user)}
        }

        return {} as AuthState;

    });
    
    const SignIn = useCallback(async ({email, password}) => {
        const response = await api.post('sessions', {
            email,
            password
        });

        //console.log(response)

        localStorage.setItem('@GoBarber:token', response.data.token);
        localStorage.setItem('@GoBarber:user', JSON.stringify(response.data.user));

        setData({token : response.data.token, user: response.data.user});

    }, []);

    const SignOut = useCallback(() => {

        localStorage.removeItem('@GoBarber:token');
        localStorage.removeItem('@GoBarber:user');

    }, []);

    return (
        <>
            <AuthContext.Provider value={{user : data.user, SignIn, SignOut}}>
                {
                    children
                }
            </AuthContext.Provider>
        </>
    );

}

export function useAuth() : AuthContextDate {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context;

}