import { useEffect } from 'react'
import useProductList from '../hooks/useProductList'
import { ProductInterface } from '../interfaces/common'
import GridItem from '../components/GridItem'
import GridContainer from '../components/GridContainer'
import ProductCard from '../components/ProductCard'
import PageHeading from '../components/PageHeading'
import Alert from '../components/Alert'
import DefaultMessage from '../components/DefaultMessage'
import DefaultLayout from '../layouts/DefaultLayout'

function Products() {
    const { getProductList, data, loading, error } = useProductList()

    useEffect(() => {
        if (localStorage.getItem('at') && localStorage.getItem('rt') && !data) {
            getProductList()
        }
    }, [data, getProductList])

    return (
        <DefaultLayout>
            <PageHeading
                title="Products"
                breadcrumbItems={[
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

            {/* Request error */}
            {error ? (
                <div className="p-3">
                    <Alert variant="error">An error was encountered while sending your request. Please try again</Alert>
                </div>
            ) : null}

            {/* Empty result */}
            {!loading && data && data.products && !data.products.length ? (
                <div className="px-3 pt-12 ">
                    <DefaultMessage title="Empty Result" message="No products matching your request was found" />
                </div>
            ) : null}

            {loading || (!loading && data && data.products && data.products.length) ? (
                <GridContainer>
                    {/* Display products */}
                    {!loading && data && data.products && data.products.length
                        ? data.products.map((product: ProductInterface, i: number) => {
                              return (
                                  <GridItem
                                      width={{
                                          xs: '12',
                                          md: '6',
                                          xl: '3',
                                      }}
                                      key={i}
                                  >
                                      <div className="p-3 h-full">
                                          <ProductCard product={product} />
                                      </div>
                                  </GridItem>
                              )
                          })
                        : null}

                    {/* Show loading state */}
                    {loading
                        ? [...Array(4)].map((_, i) => {
                              return (
                                  <GridItem
                                      width={{
                                          xs: '12',
                                          md: '6',
                                          xl: '3',
                                      }}
                                      key={i}
                                  >
                                      <div className="p-3">
                                          <ProductCard loading />
                                      </div>
                                  </GridItem>
                              )
                          })
                        : null}
                </GridContainer>
            ) : null}
        </DefaultLayout>
    )
}

export default Products
