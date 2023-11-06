import { useMutation } from '@apollo/client'
import { useContext, useState } from 'react'
import { LOGIN } from '../gql/mutations/auth'
import { LoginResponseInterface } from '../interfaces/common'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

function useLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setAccessToken, setRefreshToken } = useContext(AppContext)
    const navigate = useNavigate()

    const onLoginComplete = (data: LoginResponseInterface) => {
        const {
            authenticate: { accessToken, refreshToken },
        } = data
        if (accessToken && refreshToken) {
            setAccessToken(accessToken)
            setRefreshToken(refreshToken)
            localStorage.setItem('at', accessToken)
            localStorage.setItem('rt', refreshToken)
            navigate('/products')
        }
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
