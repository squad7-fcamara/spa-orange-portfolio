import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { api } from "../../api/apiRest"
import toast from 'react-hot-toast'


export function AuthProvider({ children }){

    const [user, setUser] = useState(null)
    // const [token, setToken] = useState(localStorage.getItem('authToken'))

    // useEffect(() => {
    //     // const validateToken = () => {
    //     //     const storageData = localStorage.getItem('authToken')

    //     //     if (storageData) {
    //     //         const data = await 
    //     //     }
    //     // }

    //     const storageData = localStorage.getItem('authToken')

    //         if (storageData) {
                
    //         }

    // })

    
    const signIn = async (email, password) => {
        const response = await api.get(`usuario/validarLogin?email=${email}&senha=${password}`)

        if (response.data.idUsuario !== -1) {
            return {
                user: response?.data,
                token: response.data?.idUsuario
            }

        }

        toast.error('Email ou senha incorreta. Tente novamente.', {
                  iconTheme: {
                    primary: '#fff',
                    secondary: '#DD0000',
                  },
                  style: {
                    background: "#DD0000",
                    color: "white",
                    minWidth: "20rem",
                  }
                });
        return

    }

    //implementar o gerador de tokens
    const validateLogin = async (email, password) => {
        const data = await signIn(email, password)

        if (data.user && data.token) {
            console.log(data);
            setUser(data?.user)
            localStorage.setItem('authToken', data.token)
            return true
        }
        return false
    }

    const signOut = () => {
        setUser(null)
    }


    return(
        <AuthContext.Provider value={{ user, validateLogin, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}   