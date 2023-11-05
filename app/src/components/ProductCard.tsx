import { ProductInterface } from '../interfaces/common'
import Button from './Button'
import Card from './Card'
import CardContent from './CardContent'
import CardFooter from './CardFooter'
import SkeletonRectangle from './SkeletonRectangle'

type Props = {
    loading?: boolean
    product?: ProductInterface
}

function ProductCard({ product, loading }: Props) {
    return (
        <Card>
            <div className="pb-[45%] bg-slate-100"></div>
            <CardContent>
                <h3 className="font-bold text-lg mb-4">
                    {loading ? <SkeletonRectangle height={28} width="30%" /> : null}
                    {product && product.title ? product.title : ''}
                </h3>
                <p>
                    {loading ? <SkeletonRectangle height={21} /> : null}
                    {product && product.description ? product.description : ''}
                </p>
            </CardContent>
            <CardFooter>
                <div className="flex font-bold items-center place-content-between">
                    {loading ? <SkeletonRectangle height={28} width={120} /> : null}
                    {product && product.currency && product.price ? (
                        <span className="text-lg">
                            {product.currency}
                            {` `}
                            {product.price}
                        </span>
                    ) : null}
                    {loading ? <SkeletonRectangle height={40} width={120} /> : null}
                    {product ? (
                        <Button variant="outlined" color="primary">
                            Learn More
                        </Button>
                    ) : null}
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProductCard
