import { useContext } from "react"
import { AuthContext } from "./AuthContext"
// import Login from "../../pages/Login"
import { useNavigate } from 'react-router-dom'

export function LoginContext({ children }){
    
    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    if (auth.user) {
        navigate('/my-projects') 
    }
    
    console.log("dont have user here", auth.user)
    return children
}