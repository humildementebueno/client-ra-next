import Image from "next/image";
import Link from "next/link";

export default function AddressDetailPage() {
    return (
        <div>
            <p>Creada en 1973, la primera Carrera en el Sistema Universitario Boliviano, pionera en el campo de la Informática con el objetivo primordial de la formación profesional con excelencia.</p>
            <Image
              src="./vercel.svg"
              alt="Vercel Logo"   
              width={100}
              height={24}
              priority
            /> 
        </div>
    )
}