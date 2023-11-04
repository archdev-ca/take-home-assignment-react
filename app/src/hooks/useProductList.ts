import { useQuery } from '@apollo/client'
import { PRODUCT_LIST } from '../gql/queries/product'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function useProductList() {
    const { accessToken } = useContext(AppContext)
    const { loading, error, data } = useQuery(PRODUCT_LIST, {
        context: {
            headers: {
                authorization: `${accessToken ? `Bearer ${accessToken}` : ''}`,
            },
        },
    })
    return {
        loading,
        error,
        data,
    }
}
export default useProductList
