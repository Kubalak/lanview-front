import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Header from '@/components/header'
import UseMode from '@/components/modeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login',
  description: 'Login screen',
}


export default function RootLayout({ children }) {  
  return (
    <html lang="pl">
      <body className={inter.className}>
        <UseMode/>
        <main className="flex min-h-screen flex-col items-center pt-2">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
