import Link from 'next/link'
import React from 'react'

const RegisterForm = () => {
    return (
        <section>
            <form>
                <input type="text" placeholder="Nickname" /><br />
                <input type="email" placeholder="email" /><br />
                <input type="password" placeholder="Password" /><br />
                <input type="password" placeholder="Password Again" /><br />
                <button type="submit"><Link href="./fcpn">Registrar</Link> </button>
            </form>


        </section>
    )
}

export default RegisterForm