import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function MainNav() {
    const navigate = useNavigate()
    const { setAccessToken, accessToken, setRefreshToken, refreshToken } = useContext(AppContext)

    const handleSignin = () => {
        navigate('/login')
    }

    const handleLogout = () => {
        setAccessToken('')
        setRefreshToken('')
        localStorage.removeItem('at')
        localStorage.removeItem('rt')
        navigate('/')
    }

    return (
        <nav className="border-b border-gray-300 py-4 px-8 flex flex-row">
            <Link to="/">
                <img src="/images/logo.png" srcSet="/images/logo@2x.png 2x" alt="" width={143} height={24} />
            </Link>
            {!accessToken || !refreshToken ? (
                <Button classNames="ml-auto" variant="contained" color="primary" onClick={handleSignin}>
                    Sign in
                </Button>
            ) : null}
            {accessToken && refreshToken ? (
                <Button classNames="ml-auto" variant="contained" color="primary" onClick={handleLogout}>
                    Logout
                </Button>
            ) : null}
        </nav>
    )
}

export default MainNav
