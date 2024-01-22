import React from 'react'

const UserContextProvider = ({children}) => {
  return (
    <>
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
    </>
  )
}

export default UserContextProvider