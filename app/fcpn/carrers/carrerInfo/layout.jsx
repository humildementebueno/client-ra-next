
export const metadata = {
  title: 'Carrera de Informatica',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
      <h1>Carrera de Informatica</h1>
        {children}
      </body>
    </html>
  )
}
