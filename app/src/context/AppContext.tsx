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
    const [accessToken, setAccessToken] = useState('')
    const [refreshToken, setRefreshToken] = useState('')
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
