import React from 'react'

type Props = {
    children: React.ReactNode
}

function CardFooter({ children }: Props) {
    return <div className="border-t p-4 border-gray-100">{children}</div>
}

export default CardFooter
