import React from 'react'

type Variant = 'primary'

type Props = {
    children: React.ReactNode
    variant: Variant
    fullWidth?: boolean
}

const variantClassMap = {
    primary:
        'bg-primary-main hover:bg-primary-dark active:bg-primary-darker outline outline-offset-0 outline-0 outline-primary-lighter focus:outline-4',
}

const Button = ({ variant, fullWidth, children }: Props) => {
    let classNames = ''
    classNames += variantClassMap[variant] ? variantClassMap[variant] : 'bg-primary-main'
    classNames += fullWidth ? ' w-full block' : ''
    return (
        <>
            <button
                className={`${classNames} rounded-sm text-primary-contrast leading-6 py-2 px-6 transition-all duration-300 ease-in-out`}
            >
                {children}
            </button>
        </>
    )
}

export default Button
