import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
    return (
        <section>
            <form>
                <input type="text" placeholder="Username" /><br />
                <input type="password" placeholder="Password" /><br />
                <button type="submit"><Link href="./fcpn">Login</Link> </button>
                <button type="submit"><Link href="./register">Registrarse</Link></button>
            </form>


        </section>
    )
}

export default LoginForm