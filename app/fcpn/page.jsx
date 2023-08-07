import Image from 'next/image'
import Link from 'next/link'


export default function FcpnPage() {
  return (
    <div>
      <h1>FCPN</h1>
      <button><Link href="./carrers">Carreras</Link></button>
      <br />
      <button><Link href="#">Dirección Facultad</Link></button>
      <br />
      <button><Link href="#">Dirección Pre-facultativo</Link></button>
      <br />
      <button><Link href="#">Tics</Link></button>
      <br />
      <button><Link href="#">Comedor</Link></button>
      <br />
      <button><Link href="#">Tutorial explicativo</Link></button>
      <br /> 
    </div>
  )
}
