import Card from '../components/Card'
import SideBar from '../components/SideBar'
import useProductList from '../hooks/useProductList'

function Products() {
    const { loading, error, data } = useProductList()
    console.log({ data })
    return (
        <div className="flex">
            <SideBar />
            <main className="flex-1 p-4">
                <h2>Products</h2>

                {data && data.products && data.products.length
                    ? data.products.map(product => {
                          return (
                              <Card>
                                  {product.title}
                                  {product.description}
                              </Card>
                          )
                      })
                    : null}
            </main>
        </div>
    )
}

export default Products
