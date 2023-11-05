import { useEffect } from 'react'
import Card from '../components/Card'
import MainNav from '../components/MainNav'
import useAuth from '../hooks/useAuth'
import useProductList from '../hooks/useProductList'
import { ProductInterface } from '../interfaces/common'

function Products() {
    const { accessToken, refreshToken } = useAuth()
    const { getProductList, loading, error, data } = useProductList()

    useEffect(() => {
        if (accessToken && refreshToken) {
            getProductList()
        }
    }, [accessToken, refreshToken])

    return (
        <div
            className="min-h-screen"
            style={{
                backgroundImage: 'url(/images/homepage-bg.jpg)',
                backgroundPosition: '50% 0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <MainNav />
            <div>
                <h2>Products</h2>

                {data && data.products && data.products.length
                    ? data.products.map((product: ProductInterface) => {
                          return (
                              <Card>
                                  {product.title}
                                  {product.description}
                              </Card>
                          )
                      })
                    : null}
            </div>
        </div>
    )
}

export default Products
