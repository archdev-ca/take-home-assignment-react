import React from 'react'

type Props = {
    children: React.ReactNode
    classNames?: string
}

const CardContent = ({ children, classNames }: Props) => {
    return <div className={`p-4 ${classNames}`}>{children}</div>
}

export default CardContent
