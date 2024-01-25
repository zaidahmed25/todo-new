import React, { useContext } from 'react'
import UserConext from '../context/UserContext';

const Navbar = () => {
  const {isUser , setIsUser} = useContext(UserConext);
  // console.log(isUser);
  return (
    <>
    <ul style={{display: 'flex' , justifyContent: 'space-around', listStyle:'none' ,} }>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {!isUser ? <div>
        <li>Register</li>
        <li onClick={()=> setIsUser(true)}>Login</li>
        </div> : <li onClick={()=> setIsUser(false)}>Logout</li>}
    </ul>
    {isUser ? <h1>User Active!!!</h1> : <h1>User Offline...</h1>}
    </>
  )
}

export default Navbar