import { useState ,useContext ,useEffect} from "react";
import ProfileContext from "../context/ProfileContext";
import './login.css'

const Login = () => {
    const [user,setUser] = useState(null) 
    const [password ,setPassword] = useState(null) 
    const {setProfile} = useContext(ProfileContext)

    const [storedUser,setStoredUser] = useState(null) 
    const [storedPassword,setStoredPassword] = useState(null) 

    useEffect(() => {
        setStoredUser(sessionStorage.getItem('username'))
        setStoredPassword(sessionStorage.getItem('password'))

    },[])

    const onUser = (event) => {
        setUser(event.target.value)
        sessionStorage.setItem('username' , event.target.value)
    }

    const onPassword = (event) => {
        setPassword(event.target.value)
        sessionStorage.setItem('password' , event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault() 
        setProfile({user,password})
    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            {/* <img src="logo192.png" alt="logo" className="logo"/> */}
            <div>
            <input placeholder="Enter Username" onChange={onUser} value={storedUser} className="input"/> <br/>
            <input placeholder="Enter Password" onChange={onPassword} value={storedPassword} className="input"/> <br/>
            <button onClick={onSubmit} className="submit-btn">Submit</button>
            </div>
        </div>
    )
}

export default Login ;