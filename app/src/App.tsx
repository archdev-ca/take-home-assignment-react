import { Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Home from './pages'
import Login from './pages/login'
import Products from './pages/products'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, from, Observable } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { REFRESH_TOKEN } from './gql/mutations/auth'
import { GraphQLError } from 'graphql'
import ProtectedRoute from './routeGuards/ProtectedRoutes'
import PublicOnly from './routeGuards/PublicOnly'

const GRAPHQL_URL = 'http://localhost:8080/graphql'

const getOperationAuthHeader = (operation: string | undefined) => {
    return operation && !['RefreshTokenMutation', 'LoginMutation'].includes(operation)
        ? { authorization: `Bearer ${localStorage.getItem('at')}` }
        : {}
}

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
        for (const err of graphQLErrors) {
            switch (err.extensions.code) {
                case 'SESSION_EXPIRED':
                    if (operation?.operationName === 'RefreshTokenMutation') return

                    return new Observable(observer => {
                        ;(async () => {
                            try {
                                const { accessToken, refreshToken } = await renewToken()
                                if (!accessToken || !refreshToken) {
                                    throw new GraphQLError('empty token')
                                }

                                const subscriber = {
                                    next: observer.next.bind(observer),
                                    error: observer.error.bind(observer),
                                    complete: observer.complete.bind(observer),
                                }
                                forward(operation).subscribe(subscriber)
                            } catch (err) {
                                observer.error(err)
                            }
                        })()
                    })
            }
        }
    }
    forward(operation)
})

const httpLink = createHttpLink({
    uri: GRAPHQL_URL,
})

const authLink = setContext((operation, { headers }) => {
    return {
        headers: {
            ...headers,
            ...getOperationAuthHeader(operation.operationName),
        },
    }
})

const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
    link: from([errorLink, authLink, httpLink]),
})

const renewToken = async () => {
    const response = await client.mutate({
        mutation: REFRESH_TOKEN,
        variables: {
            accessToken: localStorage.getItem('at'),
            refreshToken: localStorage.getItem('rt'),
        },
    })
    localStorage.setItem('at', response.data.refreshSession.accessToken)
    localStorage.setItem('rt', response.data.refreshSession.refreshToken)
    return response.data.refreshSession
}

function App() {
    return (
        <ApolloProvider client={client}>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route element={<PublicOnly redirect="/products" />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/products" element={<Products />} />
                </Route>
            </Routes>
        </ApolloProvider>
    )
}

export default App
