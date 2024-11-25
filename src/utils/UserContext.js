import { createContext } from 'react'

const UserContext = createContext({
    loginUserData : [1,2,1,2],
    bodyDate: "default"
})

export default UserContext