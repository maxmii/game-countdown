import React from 'react'
import Link from 'next/link'

interface SocialLink {
    title: string
    link: string
    icon: string
}

const ContactPage: React.FC = () => {
    const socialLinks: SocialLink[] = [
        {
            title: 'Github',
            link: 'https://github.com/maxmii',
            icon: 'github'
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/max-morris-65521b128',
            icon: 'linkedin'
        },
        {
            title: 'Email',
            link: 'mailto:morrm046@gmail.com',
            icon: 'envelope'
        }
    ]

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl justify-center flex items-center my-8">Contact Page</h1>

            <ul className="flex flex-col items-center justify-center">
                {socialLinks.map(({ title, link, icon }) => (
                    <li key={title} className="my-4">
                        {title}
                        <Link href={link} passHref>
                            <span className="mx-2" />
                            <i className={`text-2xl bi bi-${icon}`} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactPage
