import React from 'react'

type Props = {
    children: React.ReactNode
}

function Container({ children }: Props) {
    return <div className="container mx-auto px-3">{children}</div>
}

export default Container
