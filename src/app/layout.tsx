import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '../components/layout/MainNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Game Countdown',
    description: "App to show games and the countdown for when they're released"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Nav />

                {children}
            </body>
        </html>
    )
}
