import React from 'react'

const Navbar = () => {
  return (
    <>
    <ul style={{display: 'flex' , justifyContent: 'space-around', listStyle:'none' ,} }>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
        <li>Register</li>
        <li>Logout</li>
    </ul>
    </>
  )
}

export default Navbar