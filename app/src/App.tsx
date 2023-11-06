import { Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import './styles/global.css'
import Home from './routes'
import Login from './routes/login'
import Products from './routes/products'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
})

const ProtectedRoute = () => {
    const navigate = useNavigate()
    const { accessToken, refreshToken } = useContext(AppContext)
    useEffect(() => {
        if (!accessToken || !refreshToken) {
            navigate('/')
        }
    }, [accessToken, refreshToken])
    return <Outlet />
}

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/products" element={<Products />} />
                    </Route>
                </Routes>
            </ApolloProvider>
        </>
    )
}

export default App
