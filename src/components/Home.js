import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'
import { Link } from 'react-router'
import Header from "./Header";
const Home = () => {

  const {bodyDate,loginUserData, setBodyCont} = useContext(UserContext)

  console.log(bodyDate)
  console.log(loginUserData)
  return (
    <div>
      <Header/>
     
      <button onClick={()=>{
        setBodyCont("Hello World")
        console.log(bodyDate)
      }}>Update Content</button>
    </div>
  )
}

export default Home