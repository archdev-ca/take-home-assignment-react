function SideBar() {
    return (
        <div className="bg-white min-h-screen p-4" style={{ width: '300px' }}>
            <img
                src="/images/logo.png"
                srcSet="images/logo@2x.png 2x"
                alt=""
                width={143}
                height={24}
                className="mb-10"
            />
        </div>
    )
}

export default SideBar
