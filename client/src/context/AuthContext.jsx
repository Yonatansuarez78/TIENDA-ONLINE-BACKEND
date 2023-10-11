import { createContext, useState, useContext, useEffect } from 'react'
import { registerRequest, loginRequest, verityTokenRequest } from '../api/auth'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error);
            setErrors(error.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            setIsAuthenticated(true)
            console.log(res)
        } catch (error) {
            if(Array.isArray(error.response.data)) {
               return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
    };

    useEffect(() => {
        if(errors.length > 0) {
           const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])



    // useEffect(() => {
    //     async function checkLogin() {
    //         const cookies = Cookies.get()
    //         if (cookies.token) {
    //             try {
    //                 const res = await verityTokenRequest(cookies.token)
    //                 if (!res.data) setIsAuthenticated(false)

    //                 isAuthenticated(true)
    //                 setUser(res.data)
    //             } catch (error) {
    //                 setIsAuthenticated(false)
    //                 setUser(null)
    //                 console.log(error)
    //             }
    //         }
    //     }
    //     checkLogin()
    // }, [])


    return (
        <AuthContext.Provider value={{ signup, signin, user, isAuthenticated, errors }}>
            {children}
        </AuthContext.Provider>
    )
}