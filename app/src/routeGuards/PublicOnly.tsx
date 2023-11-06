import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

type Props = {
    redirect?: string
}

function PublicOnly({ redirect }: Props) {
    const navigate = useNavigate()
    const { authenticated } = useContext(AppContext)

    useEffect(() => {
        if (authenticated && redirect) {
            navigate(redirect)
        }
    }, [authenticated, navigate, redirect])

    return <>{authenticated ? null : <Outlet />}</>
}

export default PublicOnly
