import { useEffect } from 'react'
import Card from '../components/Card'
import MainNav from '../components/MainNav'
import useAuth from '../hooks/useAuth'
import useProductList from '../hooks/useProductList'
import { ProductInterface } from '../interfaces/common'
import Container from '../components/Container'
import GridItem from '../components/GridItem'
import GridContainer from '../components/GridContainer'
import CardContent from '../components/CardContent'

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
            <Container>
                <h2>Products</h2>

                <GridContainer>
                    {data && data.products && data.products.length
                        ? data.products.map((product: ProductInterface, i) => {
                              return (
                                  <GridItem
                                      width={{
                                          sm: '12',
                                          md: '3',
                                      }}
                                      key={i}
                                  >
                                      <Card>
                                          <CardContent>
                                              {product.title}
                                              {product.description}
                                          </CardContent>
                                      </Card>
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
