import './globals.css'
import { Be_Vietnam_Pro } from 'next/font/google'

const vietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: 'Ryan Dawes',
  description: 'Developer, designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-zinc-900'>
      <body className={vietnam.className}>{children}</body>
    </html>
  )
}
