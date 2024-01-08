import Link from "next/link"
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>About</Link></li>
            </ul>
        </header>
    )
}