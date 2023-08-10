import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main >
      <nav className="flex justify-around space-x-4  bg-ra-primary">
        <Link href="./login" className=" rounded-lg px-3 py-2 text-slate-200 font-medium hover:bg-blue-300 hover:text-slate-900">Realidad Aumentada</Link>
        <div className='flex'>
          <Link href="./login" className=" rounded-lg px-3 py-2 text-slate-200 font-medium hover:bg-blue-300 hover:text-slate-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-auto flex items-center text-slate-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          </Link>
          <Link href="./login" className=" rounded-lg px-3 py-2 text-slate-200 font-medium hover:bg-blue-300 hover:text-slate-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-auto flex items-center text-slate-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg></Link>
        </div>
      </nav>
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
        Reseñas
      </h1>
      <button><Link href="./login">Iniciar Sesion</Link></button>
      <h2>¿Qué te pareció la realidad aumentada?</h2>
    </main>
  )
}
