import { useContext, useEffect } from 'react'
import MainNav from '../components/MainNav'
import useProductList from '../hooks/useProductList'
import { ProductInterface } from '../interfaces/common'
import Container from '../components/Container'
import GridItem from '../components/GridItem'
import GridContainer from '../components/GridContainer'
import ProductCard from '../components/ProductCard'
import { AppContext } from '../context/AppContext'
import Breadcrumbs from '../components/Breadcrumbs'

function Products() {
    const { accessToken, refreshToken } = useContext(AppContext)
    const { getProductList, loading, data } = useProductList()

    useEffect(() => {
        if (accessToken && refreshToken && !data) {
            getProductList()
        }
    }, [accessToken, refreshToken, data])

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
                <Breadcrumbs
                    items={[
                        {
                            text: 'Home',
                            link: '/',
                        },
                        {
                            text: 'Products',
                            link: '/products',
                            active: true,
                        },
                    ]}
                />

                <GridContainer>
                    {data && data.products && data.products.length
                        ? data.products.map((product: ProductInterface, i: number) => {
                              return (
                                  <GridItem
                                      width={{
                                          xs: '12',
                                          sm: '6',
                                          xl: '3',
                                          '2xl': '3',
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
