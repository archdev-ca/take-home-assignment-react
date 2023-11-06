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
    12: 'basis-full',
}

function GridItem({ children, width }: Props) {
    let widthClass = ''
    if (width && typeof width === 'string') {
        widthClass = widthClasses[width]
    } else if (width && typeof width !== 'string') {
        if (width['xs']) {
            widthClass += ` ${widthClasses[width['xs']]}`
        }
        if (width['sm']) {
            widthClass += ` sm:${widthClasses[width['sm']]}`
        }
        if (width['md']) {
            widthClass += ` md:${widthClasses[width['md']]}`
        }
        if (width['lg']) {
            widthClass += ` lg:${widthClasses[width['lg']]}`
        }
        if (width['xl']) {
            widthClass += ` xl:${widthClasses[width['xl']]}`
        }
        if (width['2xl']) {
            widthClass += ` 2xl:${widthClasses[width['2xl']]}`
        }
    }
    return <div className={`${widthClass} flex-1`}>{children}</div>
}

export default GridItem
