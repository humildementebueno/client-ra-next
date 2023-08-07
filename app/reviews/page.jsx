import Image from 'next/image'
import Link from 'next/link'


export default function ReviewsPage() {
  return (
    <main >
      <h1>Agrega tu reseña</h1>
      <input type="text" placeholder='Escribe aqui tu comentario' />
      <p>Puntaje: </p>
      <button><Link href="#">Enviar</Link></button>
    </main>
  )
}
