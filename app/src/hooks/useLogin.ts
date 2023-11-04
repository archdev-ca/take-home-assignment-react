import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { LOGIN } from '../gql/mutations/login'

function useLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, { data, loading, error }] = useMutation(LOGIN)

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
