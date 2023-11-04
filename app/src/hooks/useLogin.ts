import { useMutation } from '@apollo/client'
import { useContext, useState } from 'react'
import { LOGIN } from '../gql/mutations/login'
import { LoginResponseInterface } from '../interfaces/common'
import { AppContext } from '../context/AppContext'

function useLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setAccessToken, setRefreshToken } = useContext(AppContext)

    const onLoginComplete = (data: LoginResponseInterface) => {
        const {
            authenticate: { accessToken, refreshToken },
        } = data
        setAccessToken(accessToken)
        setRefreshToken(refreshToken)
    }

    const [login, { data, loading, error }] = useMutation(LOGIN, { onCompleted: onLoginComplete })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        login({
            variables: {
                email,
                password,
            },
        })
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        data,
        loading,
        error,
    }
}

export default useLogin
