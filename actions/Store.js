import React, { useState } from 'react'

export const UserContext = React.createContext()

export default function Store({ children }) {
  const [User, setUser] = useState()

  return (
    <UserContext.Provider value={[User, setUser]}>
      {children}
    </UserContext.Provider>
  )
}