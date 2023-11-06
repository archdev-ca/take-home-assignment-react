import React from 'react'

type Props = {
    children: React.ReactNode
    classNames?: string
}

function Container({ children, classNames }: Props) {
    return <div className={`container mx-auto px-3 ${classNames}`}>{children}</div>
}

export default Container
