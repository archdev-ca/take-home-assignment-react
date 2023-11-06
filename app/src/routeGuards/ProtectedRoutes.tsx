import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ProtectedRoute = () => {
    const navigate = useNavigate()
    const { accessToken, refreshToken } = useContext(AppContext)
    useEffect(() => {
        if (!accessToken || !refreshToken) {
            navigate('/')
        }
    }, [accessToken, refreshToken, navigate])
    return <>{accessToken && refreshToken ? <Outlet /> : null}</>
}

export default ProtectedRoute
