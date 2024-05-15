import React, { ReactElement, createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }: any) {
    const [user, setUser] = useState({ email: "batata@gmail.com", loged: true, name: "Sr Batata", })
    const [points, setPrice] = useState(1000)
    const siginIn = ({ password, email }: any) => {
        if (email == "batata@gmail.com" && password == "qwe123") {
            setUser({ email: email, loged: true })
        } else {
            setUser({ email: '', loged: false })
        }
    }
    const handlePoints = (value: number) => {
        setPrice(value)
    }
    return (
        <AuthContext.Provider value={{ user, points: points, siginIn, handlePoints }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;