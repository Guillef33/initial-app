import './globals.css'

export const metadata = {
  title: 'Curso Next.js por Fernando Herrera',
  description: 'Vamos con Fernando para aprender bien Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
