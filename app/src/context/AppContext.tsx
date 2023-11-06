import { createContext, useState } from 'react'
import { AppContextInterface } from '../interfaces/common'

type Props = {
    children: React.ReactNode
}

export const AppContext = createContext<AppContextInterface>({
    authenticated: false,
    setAuthenticated: () => {},
})

export const AppContextProvider = ({ children }: Props) => {
    const cachedAccessToken = localStorage.getItem('at')
    const cachedRefreshToken = localStorage.getItem('rt')
    const [authenticated, setAuthenticated] = useState(cachedAccessToken && cachedRefreshToken ? true : false)
    return (
        <AppContext.Provider
            value={{
                authenticated,
                setAuthenticated,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
