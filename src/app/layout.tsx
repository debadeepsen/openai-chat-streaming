import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat',
  description: 'Streaming Chat Completion API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-300 flex justify-center items-center'>
        <main className='w-full lg:w-2/3 mt-4 p-6 bg-white shadow-md'>{children}</main>
      </body>
    </html>
  )
}
