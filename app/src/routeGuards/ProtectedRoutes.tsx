import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ProtectedRoute = () => {
    const navigate = useNavigate()
    const { authenticated } = useContext(AppContext)
    useEffect(() => {
        if (!authenticated) {
            navigate('/')
        }
    }, [authenticated, navigate])
    return <>{authenticated ? <Outlet /> : null}</>
}

export default ProtectedRoute
