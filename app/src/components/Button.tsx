import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    classNames?: string
    color: 'primary' | 'secondary'
    fullWidth?: boolean
    variant: 'contained' | 'outlined'
    onClick?: () => void
}

const disabledColorClassMap = {
    primary: ' disabled:bg-primary-disabled',
    secondary: '',
}

const classMap = {
    contained: {
        primary:
            ' bg-primary-main hover:bg-primary-dark active:bg-primary-darker outline outline-offset-0 outline-0 outline-primary-lighter focus:outline-4',
        secondary: '',
    },
    outlined: {
        primary:
            ' ring ring-2 ring-inset ring-primary-main hover:ring-primary-main hover:bg-primary-main active:bg-primary-main active:ring-primary-main hover:text-white active:text-white text-primary-main outline outline-offset-0 outline-0 outline-primary-lighter focus:outline-4',
        secondary: '',
    },
}

const Button = ({ onClick, classNames, color, variant = 'contained', fullWidth, children, ...props }: Props) => {
    let classes = ''
    let bgClasses = ''
    bgClasses += classMap[variant][color] ? classMap[variant][color] : 'bg-primary-main'
    if (props.disabled) {
        bgClasses += disabledColorClassMap[color] ? disabledColorClassMap[color] : ''
    }
    classes += fullWidth ? ' w-full block' : ''
    return (
        <>
            <button
                {...props}
                className={`${classes} ${classNames} ${bgClasses} flex justify-center rounded-sm text-primary-contrast leading-6 py-2 px-6 transition-all duration-300 ease-in-out`}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}

export default Button
