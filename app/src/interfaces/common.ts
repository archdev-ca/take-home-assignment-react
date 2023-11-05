import { Dispatch, SetStateAction } from 'react'

export interface LoginResponseInterface {
    authenticate: {
        accessToken: string
        refreshToken: string
    }
}

export interface AppContextInterface {
    accessToken: string
    refreshToken: string
    setAccessToken: Dispatch<SetStateAction<string>>
    setRefreshToken: Dispatch<SetStateAction<string>>
}

export interface ProductInterface {
    currency: string
    description: string
    id: string
    price: number
    title: string
}
