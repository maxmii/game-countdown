'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Games', path: '/gamesTable' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];
const Nav: React.FC = () => {
  const pathName = usePathname();
  return (
    <ul>
      {navLinks.map((link) => (
        <li key={link.title}>
          <Link
            href={link.path}
            className={pathName === link.path ? 'activeLink' : ''}
            passHref
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
