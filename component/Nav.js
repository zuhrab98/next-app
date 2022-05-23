import Link from 'next/link'
import styles from '../styles/Nav.module.scss'

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                wqqTM
            </div>
            <div className={styles.links}>
                <Link href='/'>Home</Link>
                <Link href='/posts'>Posts</Link>
                <Link href='/contacts'>Contacts</Link>
            </div>
        </nav>
    )
}
