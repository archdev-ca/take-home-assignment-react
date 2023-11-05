import React from 'react'

type Props = {
    children: React.ReactNode
}

function GridContainer({ children }: Props) {
    return <div className="container flex flex-wrap">{children}</div>
}

export default GridContainer
