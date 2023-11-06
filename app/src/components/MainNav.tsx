import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useApolloClient } from '@apollo/client'

function MainNav() {
    const client = useApolloClient()
    const navigate = useNavigate()
    const { authenticated, setAuthenticated } = useContext(AppContext)

    const handleClickSignin = () => {
        navigate('/login')
    }

    const handleLogout = () => {
        setAuthenticated(false)
        localStorage.removeItem('at')
        localStorage.removeItem('rt')
        client.clearStore()
        navigate('/')
    }

    return (
        <nav className="border-b border-gray-300 py-4 px-8 flex flex-row">
            <Link to="/">
                <img src="/images/logo.png" srcSet="/images/logo@2x.png 2x" alt="" width={143} height={24} />
            </Link>
            {!authenticated ? (
                <Button classNames="ml-auto" variant="contained" color="primary" onClick={handleClickSignin}>
                    Sign in
                </Button>
            ) : null}
            {authenticated ? (
                <Button classNames="ml-auto" variant="contained" color="primary" onClick={handleLogout}>
                    Logout
                </Button>
            ) : null}
        </nav>
    )
}

export default MainNav
