import { gql } from '@apollo/client'

export const LOGIN = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        authenticate(email: $email, password: $password) {
            accessToken
            refreshToken
        }
    }
`
