import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { AppContextProvider } from './context/AppContext.tsx'

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>
)
