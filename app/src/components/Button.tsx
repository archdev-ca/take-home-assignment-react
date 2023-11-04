import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant: 'primary' | 'secondary'
    fullWidth?: boolean
}

const variantClassMap = {
    primary:
        'bg-primary-main hover:bg-primary-dark active:bg-primary-darker outline outline-offset-0 outline-0 outline-primary-lighter focus:outline-4',
    secondary: '',
}

const Button = ({ variant, fullWidth, children, ...props }: Props) => {
    let classNames = ''
    classNames += variantClassMap[variant] ? variantClassMap[variant] : 'bg-primary-main'
    classNames += fullWidth ? ' w-full block' : ''
    return (
        <>
            <button
                {...props}
                className={`${classNames} rounded-sm text-primary-contrast leading-6 py-2 px-6 transition-all duration-300 ease-in-out`}
            >
                {children}
            </button>
        </>
    )
}

export default Button
