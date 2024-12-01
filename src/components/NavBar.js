function NavBar() {
    const links = [
        {
            id: 1,
            url: '/',
            text: 'Home'
        },
        {
            id: 2,
            url: '/#/about',
            text: 'About'
        },
        {
            id: 3,
            url: '/#/projects',
            text: 'Projects'
        },
        {
            id: 4,
            url: '/#/contact',
            text: 'Contact'
        }
    ]

    return (
       <nav className="flex justify-between items-center p-4 mx-4">
            <h1>Tarika Birch</h1>
            <ul className="hidden md:flex gap-6">
                {links.map((link) => {
                    return (
                        <li key={link.id} className="w-[80px]">
                            <a href={link.url}>{link.text}</a>
                        </li>
                    )
                })}
            </ul>

            <div className="md:hidden">
                <button>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
       </nav>
    )
}

export default NavBar