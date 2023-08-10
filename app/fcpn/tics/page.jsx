import Link from "next/link";

export default function TicsPage() {
    return (
        <div>
            <button><Link href="./tics/ticsDetail">?</Link></button>
            <button><Link href="#">+</Link></button>
        </div>
    )
}