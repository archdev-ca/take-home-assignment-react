import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

type Props = {
    redirect?: string
}

function PublicOnly({ redirect }: Props) {
    const navigate = useNavigate()
    const { accessToken, refreshToken } = useContext(AppContext)

    useEffect(() => {
        if (accessToken && refreshToken && redirect) {
            navigate(redirect)
        }
    }, [accessToken, refreshToken, navigate, redirect])

    return <>{accessToken && refreshToken ? null : <Outlet />}</>
}

export default PublicOnly
