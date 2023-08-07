import Link from "next/link";

export default function CarrersPage() {
    return (
        <div>
            <h1>Carreras</h1>
            <button><Link href="./carrers/carrerInfo">Carrera de Informática</Link></button>
            <br />
            <button><Link href="./carrers/carrerEsta">Carrera de Estadistica</Link></button>
            <br />
            <button><Link href="./carrers/carrerMate">Carrera de Matematicas</Link></button>
        </div>
    )
}