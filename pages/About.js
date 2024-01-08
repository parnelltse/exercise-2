import Footer from "@/components/Footer"
import Header from "@/components/Header"
import styles from '@/styles/About.module.css'
import Counter from "@/components/Counter"

export default function About() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <Counter/>
            </main>
            test
            <Footer/>
        </>
    )
}
