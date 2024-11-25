function NavBar() {
    const links = [
        {
            id: 1,
            url: '#home',
            text: 'Home'
        },
        {
            id: 2,
            url: '#about',
            text: 'About'
        },
        {
            id: 3,
            url: '#projects',
            text: 'Projects'
        },
        {
            id: 4,
            url: '#contact',
            text: 'Contact'
        }
    ]

    return (
       <nav className="flex justify-between items-center p-4">
            <h1>Tarika Birch</h1>
            <ul className="flex gap-4">
                {links.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    )
                })}
            </ul>
       </nav>
    )
}

export default NavBar