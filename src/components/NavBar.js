import { Drawer } from "@mui/material"
import { useState } from "react"
import { Box } from '@mui/material'
import '../styles/NavBar.css'

function NavBar(path) {
    const [open, setOpen] = useState(false)

    function checkActiveLink(linkUrl) {
        linkUrl = linkUrl.split("/#")

        if (linkUrl.length > 1) {
            linkUrl = linkUrl[1]
        } else {
            linkUrl = linkUrl[0]
        }

        return path['path'] === linkUrl
    }

    const links = [
        {
            id: 1,
            url: '/',
            text: 'Home',
            icon: 'fa-home',
        },
        {
            id: 2,
            url: '/#/about',
            text: 'About',
            icon: 'fa-user',
        },
        {
            id: 3,
            url: '/#/projects',
            text: 'Projects',
            icon: 'fa-briefcase',
        },
        {
            id: 4,
            url: '/#/designs',
            text: 'Designs',
            icon: 'fa-palette',
        },
        {
            id: 5,
            url: '/#/contact',
            text: 'Contact',
            icon: 'fa-envelope',
        }
    ]

    const toggleDrawer = (open) => (event) => {
        setOpen(open)
    };

    return (
        <nav className="flex justify-between items-center p-4 mx-4">
            <h1>Tarika Birch</h1>
            <ul className="hidden md:flex gap-6">
                {links.map((link) => {
                    return (
                        <li key={link.id} className={checkActiveLink(link.url) ? 'active w-[80px]' : 'w-[80px]'}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    )
                })}
            </ul>

            <div className="md:hidden">
                <button onClick={toggleDrawer(true)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <Box id="drawer"
                        className="flex flex-col items-center justify-between w-[300px] p-8"
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}>
                        <div className="w-full">
                            <div className="pb-6 flex flex-col items-start">
                                <div className="flex items-center gap-4">
                                    <img src="technicallyti.png" alt="" width={50} className="rounded-full pb-1" />
                                    <div>
                                        <h1 className="text-xl">Tarika Birch</h1>
                                        <h2 className="text-sm opacity-60">Frontend Developer</h2>
                                    </div>
                                </div>
                                <div id="drawer-divider"></div>
                            </div>
                            <div className="flex w-full flex-col gap-9 px-2">
                                {links.map((link) => {
                                    return (
                                        <a key={link.id} className="flex gap-4 items-center"
                                            href={link.url}>
                                            <i key={link.id} className={link.icon + ' fa-solid'}></i>
                                            {link.text}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        <img src="frontend.png" alt="" width={200} />
                    </Box>
                </Drawer>
            </div>
        </nav>
    )
}

export default NavBar

