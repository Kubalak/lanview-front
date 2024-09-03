import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import UseMode from '@/components/modeSwitcher'
import Header from '@/components/header'
import authenticated from '@/utils/checkLogin'
import { redirect } from 'next/navigation'

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
        <UseMode/>
        <Header/>
        <main className="flex min-h-screen flex-col items-center pt-2">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
