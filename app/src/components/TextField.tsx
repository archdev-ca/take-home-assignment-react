import { HTMLInputTypeAttribute } from 'react'

type Props = {
    value?: number | string
    name?: string
    type?: HTMLInputTypeAttribute
    onChange?: () => void
}

function TextField({ value, name, onChange, type = 'text' }: Props) {
    return (
        <input
            className=" transition-all duration-300 rounded-sm shadow-border block w-full py-2 px-4 text-sm leading-6 outline-none focus:outline-4 outline-offset-0 focus:outline-primary-lighter focus:shadow-primary-lighter"
            type={type}
            value={value}
            name={name}
            onChange={onChange}
        />
    )
}

export default TextField
