import Breadcrumbs from './Breadcrumbs'
import { BreadcrumbItemInterface } from '../interfaces/common'

type Props = {
    title: string
    breadcrumbItems: BreadcrumbItemInterface[]
}

const PageHeading = ({ title, breadcrumbItems }: Props) => {
    return (
        <>
            <Breadcrumbs items={breadcrumbItems} />

            <h2 className="px-3 text-2xl font-bold mt-3 mb-6">{title}</h2>
        </>
    )
}

export default PageHeading
