import { gql } from '@apollo/client'

export const LOGIN = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        authenticate(email: $email, password: $password) {
            accessToken
            refreshToken
        }
    }
`

export const REFRESH_TOKEN = gql`
    mutation RefreshTokenMutation($accessToken: String!, $refreshToken: String!) {
        refreshSession(accessToken: $accessToken, refreshToken: $refreshToken) {
            accessToken
            refreshToken
        }
    }
`
