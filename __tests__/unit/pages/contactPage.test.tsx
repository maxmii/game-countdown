import React from 'react'
import { render, screen } from '@testing-library/react'

import ContactPage from '../../../src/app/contact/page'

describe('Contact Page', () => {
  it('renders Contact Page without crashing', () => {
    render(<ContactPage />)
    expect(screen.getByText('Contact Page')).toBeInTheDocument()
  })

  test('each social link has correct title, link and icon', () => {
    render(<ContactPage />)
    const socialLinks = screen.getAllByRole('link')
    const expectedSocialLinks = [
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
        icon: 'envelope',
      },
    ]
    socialLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href', expectedSocialLinks[index].link)
      expect(
        screen.getByText(expectedSocialLinks[index].title)
      ).toBeInTheDocument()
      expect(
        link.querySelector(`.bi-${expectedSocialLinks[index].icon}`)
      ).toBeInTheDocument()
    })
  })
})
