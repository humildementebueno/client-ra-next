import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'FCPN',
  description: 'Generated by create next app',
}
export default function FcpnPage() {
  return (
    <div>
      <h1>FCPN</h1>
      <button><Link href="./fcpn/carrers">Carreras</Link></button>
      <br />
      <button><Link href="./fcpn/addressFacu">Dirección Facultad</Link></button>
      <br />
      <button><Link href="./fcpn/addressPreFacu">Dirección Pre-facultativo</Link></button>
      <br />
      <button><Link href="./fcpn/tics">Tics</Link></button>
      <br />
      <button><Link href="./fcpn/shopFood">Comedor</Link></button>
      <br />
      <button><Link href="./fcpn/tutorial">Tutorial explicativo</Link></button>
      <br /> 
    </div>
  )
}
