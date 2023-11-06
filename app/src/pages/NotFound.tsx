import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    const handleClickBack = () => {
        navigate('/')
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-8xl">404</h1>
            <p className="mb-8">The page you requested was not found</p>
            <Button color="primary" variant="contained" onClick={handleClickBack}>
                Back to Home
            </Button>
        </div>
    )
}

export default NotFound
