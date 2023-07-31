import { Metadata } from "next";
import styles from "./not-found.module.css"
import Link from "next/link";

export const metadata: Metadata = {
    title: "José Miguel Carvajal Jiménez - 404",
}

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.paragraph}>Oops, it seems that you&apos;re lost.</p>
            <p className={styles.paragraph}>Press the button to go back home.</p>
            <Link href="/">
                <button className={styles.button}>
                    Go Home
                </button>
            </Link>
        </div>
    );
}