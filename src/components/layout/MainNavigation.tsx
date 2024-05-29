'use client'
import React, { memo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Games', path: '/gamesTable' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
]

const Nav: React.FC = () => {
    const pathName = usePathname()
    return (
        <ul className="relative flex justify-around bg-slate-700 pb-5 pt-5 rounded-md">
            {navLinks.map(({ title, path }) => (
                <li className={pathName === path ? 'activeLink' : ''} key={title}>
                    <Link href={path} passHref>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default memo(Nav)
