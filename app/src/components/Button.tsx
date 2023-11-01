import React from 'react'

type Variant = 'primary'

type Props = {
    children: React.ReactNode
    variant: Variant
    fullWidth?: boolean
}

const variantClassMap = {
    primary: 'bg-primary'
}

const Button = ({variant, fullWidth, children}: Props) => {
    let classNames = '';
    classNames += variantClassMap[variant] ? variantClassMap[variant] : 'bg-primary';
    classNames += fullWidth ? ' w-full block' : '';
    return (
        <>
            <button className={`${classNames} rounded-sm text-white leading-6 py-2`}>{children}</button>
        </>
    )
}

export default Button