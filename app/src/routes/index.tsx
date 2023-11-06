import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import DefaultLayout from '../layouts/DefaultLayout'

function Home() {
    const navigate = useNavigate()

    const handleClickProducts = () => {
        navigate('/products')
    }

    return (
        <DefaultLayout>
            <div className="flex flex-col flex-1 h-full justify-center items-center">
                <h1 className=" text-3xl mb-4">Home Page</h1>
                <Button color="primary" variant="outlined" onClick={handleClickProducts}>
                    Products
                </Button>
            </div>
        </DefaultLayout>
    )
}

export default Home
