import { Dispatch, SetStateAction } from 'react'

export interface LoginResponseInterface {
    authenticate: {
        accessToken: string
        refreshToken: string
    }
}

export interface RefreshSessionResponseInterface {
    refreshSession: {
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

export type ResponsiveSizes = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
export interface ResponsiveWidthInterface {
    xs?: ResponsiveSizes
    sm?: ResponsiveSizes
    md?: ResponsiveSizes
    lg?: ResponsiveSizes
    xl?: ResponsiveSizes
    '2xl'?: ResponsiveSizes
}

export interface BreadcrumbItemInterface {
    text: string
    link: string
    active?: boolean
}

export interface GQLServerErrorInterface {
    errors: [
        {
            extensions: {
                code: string
            }
        }
    ]
}
