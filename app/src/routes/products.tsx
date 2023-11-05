import { useEffect } from 'react'
import MainNav from '../components/MainNav'
import useAuth from '../hooks/useAuth'
import useProductList from '../hooks/useProductList'
import { ProductInterface } from '../interfaces/common'
import Container from '../components/Container'
import GridItem from '../components/GridItem'
import GridContainer from '../components/GridContainer'
import ProductCard from '../components/ProductCard'

function Products() {
    const { accessToken, refreshToken } = useAuth()
    const { getProductList, loading, data } = useProductList()

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
            <Container>
                <h2>Products</h2>

                <GridContainer>
                    {data && data.products && data.products.length
                        ? data.products.map((product: ProductInterface, i: number) => {
                              return (
                                  <GridItem
                                      width={{
                                          sm: '3',
                                          md: '3',
                                      }}
                                      key={i}
                                  >
                                      <div className="p-2">
                                          <ProductCard product={product} />
                                      </div>
                                  </GridItem>
                              )
                          })
                        : null}
                    {loading
                        ? [...Array(4)].map((_, i) => {
                              return (
                                  <GridItem
                                      width={{
                                          sm: '3',
                                          md: '3',
                                      }}
                                      key={i}
                                  >
                                      <div className="p-2">
                                          <ProductCard loading />
                                      </div>
                                  </GridItem>
                              )
                          })
                        : null}
                </GridContainer>
            </Container>
        </div>
    )
}

export default Products
