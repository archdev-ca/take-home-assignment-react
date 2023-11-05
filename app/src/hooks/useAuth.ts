import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

function useAuth() {
    const { accessToken, setAccessToken, refreshToken, setRefreshToken } = useContext(AppContext)

    useEffect(() => {
        const accessToken = sessionStorage.getItem('at')
        const refreshToken = sessionStorage.getItem('rt')
        if (accessToken) {
            setAccessToken(accessToken)
        }
        if (refreshToken) {
            setRefreshToken(refreshToken)
        }
    }, [])

    return {
        accessToken,
        refreshToken,
    }
}

export default useAuth
