import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant: 'primary' | 'secondary'
    fullWidth?: boolean
}

const variantClassMap = {
    primary:
        ' bg-primary-main hover:bg-primary-dark active:bg-primary-darker outline outline-offset-0 outline-0 outline-primary-lighter focus:outline-4',
    secondary: '',
}

const disabledVariantClassMap = {
    primary: ' disabled:bg-primary-disabled',
    secondary: '',
}

const Button = ({ variant, fullWidth, children, ...props }: Props) => {
    let classNames = ''
    let bgClasses = ''
    bgClasses += variantClassMap[variant] ? variantClassMap[variant] : 'bg-primary-main'
    if (props.disabled) {
        bgClasses += disabledVariantClassMap[variant] ? disabledVariantClassMap[variant] : ''
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
