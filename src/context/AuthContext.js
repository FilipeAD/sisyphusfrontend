import {createContext, useState, useEffect} from 'react'
import { jwtDecode } from "jwt-decode"; // decodes the info that we specified in the api
import { useNavigate} from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)
    let [userInfo, setUserInfo] = useState([]);

    const history = useNavigate()


    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'email': e.target.email.value, 'password': e.target.password.value})
    })

   
    let data = await response.json()
    if(response.status == 200){
        setAuthTokens(data)
        setUser(jwtDecode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
        history('/')
    }else{
        alert('Error on api login request')
    }
    }  

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history('/login')
    }

      
    let updateToken = async (e) => {
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',

            },
            body:JSON.stringify({'refresh': authTokens.refresh})
    })

    let data = await response.json()
    if(response.status == 200){
        setAuthTokens(data)
        setUser(jwtDecode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
    }else{
        logoutUser()
    }
    } 

    let updateINFO = async (id) => {
        let response = await fetch(`http://127.0.0.1:8000/api/user/${id}`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
    
    
        let data = await response.json()
        if(response.status == 200){
            setUserInfo(data);
        }else{
            console.error(`Failed to update user information. Status: ${response.status}`);
        }
    }

    let createUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/user/', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'username': e.target.username.value ,'email': e.target.email.value, 'password': e.target.password.value})
    })

   
    if(response.status == 201){
        history('/')
    }else{
        alert('Error on api login request')
    }
    }  


    let contextData = {
        user: user,
        authTokens: authTokens,
        userInfo: updateINFO,
        loginUser:loginUser,
        logoutUser:logoutUser,
        createUser:createUser,
        updateINFO:updateINFO
    }

    useEffect(()=>{
        
        let interval = setInterval(()=>{
            if (authTokens){
                updateToken()
            }
        }, 2000)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])


    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}