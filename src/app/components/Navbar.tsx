import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/destinos">Destinos</Link>
                    </li>
                    <li>
                        <Link href="/guias">Guías de Viaje</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}