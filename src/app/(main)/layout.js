import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Header from '@/components/header'
import UseMode from '@/components/modeSwitcher'
import authenticated from '@/utils/checkLogin'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Index',
  description: 'Default description given to everyone ;)',
}


export default async function RootLayout({ children }) { 
  const login = await authenticated();
    if(!login)
      redirect('/login'); 
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Header/>
        <UseMode/>
        <main className="flex min-h-screen flex-col items-center pt-2">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
