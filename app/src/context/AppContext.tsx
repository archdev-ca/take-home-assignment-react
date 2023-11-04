import { createContext } from 'react'

type Props = {
    children: React.ReactNode
}

export const AppContext = createContext({
    refreshToken: '',
    accessToken: '',
})

export const AppContextProvider = ({ children }: Props) => {
    return (
        <AppContext.Provider
            value={{
                refreshToken: '',
                accessToken: '',
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
