import { memo } from 'react'
import Link from 'next/link'

const ContactPage: React.FC = () => {
  type SocialLink = {
    title: string
    link: string
    icon: string
  }


  const socialLinks: SocialLink[] = [
    {
      title: 'Github',
      link: 'https://github.com/maxmii',
      icon: 'github',
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/max-morris-65521b128',
      icon: 'linkedin',
    },
    {
      title: 'Email',
      link: 'mailto:morrm046@gmail.com',
      icon: '',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl justify-center flex items-center my-8">
        Contact Page
      </h1>

      <ul className="flex flex-col items-center justify-center">
        {socialLinks.map(({ title, link, icon }) => (
          <li key={title}>
            <Link href={link} passHref>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(ContactPage)
