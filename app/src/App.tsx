import { Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Home from './routes'
import Login from './routes/login'
import Products from './routes/products'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import useAuth from './hooks/useAuth'

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
})

function App() {
    useAuth()
    return (
        <>
            <ApolloProvider client={client}>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </ApolloProvider>
        </>
    )
}

export default App
