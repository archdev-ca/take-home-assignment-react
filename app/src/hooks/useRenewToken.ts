import { useMutation } from '@apollo/client'
import { REFRESH_TOKEN } from '../gql/mutations/auth'
import { RefreshSessionResponseInterface } from '../interfaces/common'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function useRenewToken() {
    const { setAccessToken, setRefreshToken } = useContext(AppContext)
    const onRefreshComplete = (data: RefreshSessionResponseInterface) => {
        const {
            refreshSession: { accessToken, refreshToken },
        } = data
        if (accessToken && refreshToken) {
            setAccessToken(accessToken)
            setRefreshToken(refreshToken)
            sessionStorage.setItem('at', accessToken)
            sessionStorage.setItem('rt', refreshToken)
        }
    }
    const [renewToken, { loading, error, data }] = useMutation(REFRESH_TOKEN, { onCompleted: onRefreshComplete })
    return {
        renewToken,
        loading,
        error,
        data,
    }
}

export default useRenewToken
