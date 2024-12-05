import { Drawer } from "@mui/material"
import { useState } from "react"
import { Box } from '@mui/material'
import '../styles/NavBar.css'

function NavBar() {
    const [open, setOpen] = useState(false);

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

    const toggleDrawer = (open) => (event) => {
        setOpen(open)
    };

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
                <button onClick={toggleDrawer(true)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Drawer open={open} onClose={toggleDrawer(false)} anchor="right" >
                    <Box id="drawer"
                        className="flex flex-col gap-8 w-[250px] p-8"
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}>
                        {links.map((link) => {
                            return (
                                <a key={link.id} className="text-center"
                                    href={link.url}>
                                    {link.text}
                                </a>
                            )
                        })}
                    </Box>
                </Drawer>
            </div>
        </nav>
    )
}

export default NavBar