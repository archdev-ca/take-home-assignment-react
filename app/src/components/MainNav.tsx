import Button from './Button'

function MainNav() {
    return (
        <nav className="border-b border-gray-300 p-4 flex flex-row place-content-between">
            <img src="/logo.png" srcSet="logo@2x.png 2x" alt="" width={143} height={24} />
            <Button variant="primary">Sign in</Button>
        </nav>
    )
}

export default MainNav
