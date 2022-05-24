import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Nav.module.scss'
import { FC } from "react";

const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 1, title: 'Post', path: '/posts' },
    { id: 1, title: 'Contacts', path: '/contacts' },
]

export const Nav: FC = () => {
    // содержит путь текущей страницы
    const { pathname } = useRouter()

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src='/favicon.ico' width={60} height={60} alt='logo' />
            </div>
            <div className={styles.links}>
                {navigation.map(({ id, title, path }, index) => (
                    <Link key={`${id}_${index}`} href={path}>
                        <a className={pathname === path ? styles.active : null}>{title}</a>
                    </Link>
                ))}
            </div>
        </nav>
    )
}
