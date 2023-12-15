import '../globals.css'
import { Navbar } from '@/components'
export const metadata = {
  title: 'Curso Next.js por Fernando Herrera',
  description: 'Vamos con Fernando para aprender bien Next',
}

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
     <Navbar />
     <main>
     {children}
    </main>
    </>
  )
}
