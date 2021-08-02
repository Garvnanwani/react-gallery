import React, { createContext, useState } from 'react'

export default AppContext = createContext({ loggedIn: false, user: {} })

export function AppProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    const value = {
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
