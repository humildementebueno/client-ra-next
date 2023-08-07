import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main >
      <h1>Reseñas</h1>
      <button><Link href="./login">Iniciar Sesion</Link></button>
      <h2>¿Qué te pareció la realidad aumentada?</h2>
    </main>
  )
}
