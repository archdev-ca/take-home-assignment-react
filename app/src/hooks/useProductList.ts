import { useLazyQuery } from '@apollo/client'
import { PRODUCT_LIST } from '../gql/queries/product'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function useProductList() {
    const { accessToken } = useContext(AppContext)
    console.log({ accessToken })
    const [getProductList, { loading, error, data }] = useLazyQuery(PRODUCT_LIST, {
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
