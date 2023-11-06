import { useLazyQuery } from '@apollo/client'
import { PRODUCT_LIST } from '../gql/queries/product'

function useProductList() {
    const [getProductList, { loading, error, data }] = useLazyQuery(PRODUCT_LIST, {})
    return {
        getProductList,
        loading,
        error,
        data,
    }
}
export default useProductList
