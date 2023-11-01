import React from 'react'

type Props = {
    children: React.ReactNode
    htmlFor?: string
}

function Label({htmlFor, children}: Props) {
  return (
    <label htmlFor={htmlFor} className='font-bold mb-4'>{children}</label>
  )
}

export default Label