import React from 'react'
import MainNav from '../components/MainNav'
import Container from '../components/Container'

type Props = {
    children: React.ReactNode
}

function DefaultLayout({ children }: Props) {
    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                backgroundImage: 'url(/images/homepage-bg.jpg)',
                backgroundPosition: '50% 0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <MainNav />
            <Container classNames="pb-14 flex flex-col flex-1">{children}</Container>
        </div>
    )
}

export default DefaultLayout
