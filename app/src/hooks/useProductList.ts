import { ServerError, useLazyQuery } from '@apollo/client'
import { PRODUCT_LIST } from '../gql/queries/product'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { GQLServerErrorInterface } from '../interfaces/common'
import useRenewToken from './useRenewToken'

function useProductList() {
    const { accessToken, refreshToken } = useContext(AppContext)
    const { renewToken } = useRenewToken()
    const [getProductList, { loading, error, data }] = useLazyQuery(PRODUCT_LIST, {
        onError: error => {
            if (error && error.networkError?.name && error.networkError?.name === 'ServerError') {
                ;((error.networkError as ServerError).result as GQLServerErrorInterface).errors.every(err => {
                    if (err.extensions.code === 'SESSION_EXPIRED') {
                        renewToken({
                            variables: {
                                accessToken,
                                refreshToken,
                            },
                        })
                        return
                    }
                })
            }
        },
        context: {
            headers: {
                authorization: `${accessToken ? `Bearer ${accessToken}` : ''}`,
            },
        },
    })
    return {
        getProductList,
        loading,
        error,
        data,
    }
}
export default useProductList
