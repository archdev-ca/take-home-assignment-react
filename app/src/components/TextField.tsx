import { HTMLInputTypeAttribute } from 'react'

type Props = {
    value?: number | string
    setValue?: (value: string) => void
    name?: string
    type?: HTMLInputTypeAttribute
}

function TextField({ value, setValue, name, type = 'text' }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue && setValue(e.target.value)
    }

    return (
        <input
            className=" transition-all duration-300 rounded-sm shadow-border block w-full py-2 px-4 text-sm leading-6 outline-none focus:outline-4 outline-offset-0 focus:outline-primary-lighter focus:shadow-primary-lighter"
            type={type}
            defaultValue={value}
            name={name}
            onChange={handleChange}
        />
    )
}

export default TextField
