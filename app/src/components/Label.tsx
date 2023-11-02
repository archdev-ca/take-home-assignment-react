import React from 'react'

type Props = {
    children: React.ReactNode
    htmlFor?: string
    classNames?: string
}

function Label({ classNames, htmlFor, children }: Props) {
    return (
        <label htmlFor={htmlFor} className={`font-bold ${classNames}`}>
            {children}
        </label>
    )
}

export default Label
