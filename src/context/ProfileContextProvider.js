
import React,{useState} from 'react' 
import ProfileContext from './ProfileContext'

const ProfileContextProvider = ({children}) => {
    const [userProfile ,setProfile] = useState(null)
    return (
        <ProfileContext.Provider value={{userProfile,setProfile}}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider