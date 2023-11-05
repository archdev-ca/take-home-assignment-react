import React from 'react'
import { ResponsiveSizes, ResponsiveWidthInterface } from '../interfaces/common'

type Props = {
    children: React.ReactNode
    width: ResponsiveSizes | ResponsiveWidthInterface
}

const widthClasses = {
    1: 'basis-1/12',
    2: 'basis-2/12',
    3: 'basis-3/12',
    4: 'basis-4/12',
    5: 'basis-5/12',
    6: 'basis-6/12',
    7: 'basis-7/12',
    8: 'basis-8/12',
    9: 'basis-9/12',
    10: 'basis-10/12',
    11: 'basis-11/12',
    12: 'w-full',
}

function GridItem({ children, width }: Props) {
    return <div className={`${widthClasses[width]} flex-1`}>{children}</div>
}

export default GridItem
