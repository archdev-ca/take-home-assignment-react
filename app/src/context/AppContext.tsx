import { createContext, useState } from 'react'
import { AppContextInterface } from '../interfaces/common'

type Props = {
    children: React.ReactNode
}

export const AppContext = createContext<AppContextInterface>({
    refreshToken: '',
    accessToken: '',
    setAccessToken: () => {},
    setRefreshToken: () => {},
})

export const AppContextProvider = ({ children }: Props) => {
    const cachedAccessToken = sessionStorage.getItem('at')
    const cachedRefreshToken = sessionStorage.getItem('rt')
    const [accessToken, setAccessToken] = useState(cachedAccessToken || '')
    const [refreshToken, setRefreshToken] = useState(cachedRefreshToken || '')
    return (
        <AppContext.Provider
            value={{
                accessToken,
                setAccessToken,
                refreshToken,
                setRefreshToken,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
