import React from 'react'

type Props = {
    variant: 'error' | 'success'
    children: React.ReactNode
    classNames: string
}

function Alert({ variant, classNames, children }: Props) {
    let classes = ''
    if (variant === 'error') {
        classes += 'bg-red-200 text-red-700 border-red-500'
    }
    if (variant === 'success') {
        classes += 'bg-green-200 text-green-700 border-green-500'
    }
    return <div className={`${classNames} ${classes} rounded-sm p-4 border-l-6 `}>{children}</div>
}

export default Alert
