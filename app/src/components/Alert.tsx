import React from 'react'

type Props = {
    variant: 'error' | 'success'
    children: React.ReactNode
    classNames?: string
}

function Alert({ variant, classNames, children }: Props) {
    let classes = ''
    if (variant === 'error') {
        classes += 'bg-red-100 text-red-700 border-red-500'
    }
    if (variant === 'success') {
        classes += 'bg-green-100 text-green-700 border-green-500'
    }
    return <div className={`${classNames} ${classes} rounded-sm p-4 border-l-4 `}>{children}</div>
}

export default Alert
