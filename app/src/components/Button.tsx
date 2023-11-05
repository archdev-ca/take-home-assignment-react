import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    color: 'primary' | 'secondary'
    fullWidth?: boolean
    variant: 'contained' | 'outlined'
}

const colorClassMap = {
    primary:
        ' bg-primary-main hover:bg-primary-dark active:bg-primary-darker outline outline-offset-0 outline-0 outline-primary-lighter focus:outline-4',
    secondary: '',
}

const disabledColorClassMap = {
    primary: ' disabled:bg-primary-disabled',
    secondary: '',
}

const variantClassMap = {}

const classMap = {
    contained: {
        primary: '',
        secondary: '',
    },
    outlined: {
        primary: '',
        secondary: '',
    },
}

const Button = ({ color: variant, fullWidth, children, ...props }: Props) => {
    let classNames = ''
    let bgClasses = ''
    bgClasses += colorClassMap[variant] ? colorClassMap[variant] : 'bg-primary-main'
    if (props.disabled) {
        bgClasses += disabledColorClassMap[variant] ? disabledColorClassMap[variant] : ''
    }
    classNames += fullWidth ? ' w-full block' : ''
    return (
        <>
            <button
                {...props}
                className={`${classNames} ${bgClasses} flex justify-center rounded-sm text-primary-contrast leading-6 py-2 px-6 transition-all duration-300 ease-in-out`}
            >
                {children}
            </button>
        </>
    )
}

export default Button
