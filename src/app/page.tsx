import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "José Miguel Carvajal Jiménez - Inicio",
}

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className={styles.profilephoto}
          width={250}
          height={250}
          priority
          unoptimized />
        <section className={styles.description}>
          <p>Hola! mi nombre es José Miguel Carvajal Jiménez.</p>
          <p>Soy un desarollador de software Full-Stack basado en Colombia. <br /> <br /> Si necesitas de mis servicios no dudes en contactarme!</p>
          <div className={styles.icons}>
            <Link href="mailto:josemcj07@gmail.com" target="_blank">
              <Image
                src="/email.svg"
                alt="Mail icon"
                className={styles.icon}
                width={80}
                height={80}
                priority
                unoptimized />
            </Link>

            <Link href="https://github.com/jmcarvajalj" target="_blank">
              <Image
                src="/github.svg"
                alt="Github icon"
                className={styles.icon}
                width={100}
                height={100}
                priority
                unoptimized />
            </Link>

            <Link href="https://www.linkedin.com/in/jose-miguel-carvajal-jimenez/" target="_blank">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn icon"
                className={styles.icon}
                width={80}
                height={80}
                priority
                unoptimized />
            </Link>
          </div>
          <p className={styles.phone}>Telefono Celular / Whatsapp : +57 310 8094629
            <br /><br />
            Telefono Fijo : +57 601 2519779
            <br /><br />
            Email : josemcj07@gmail.com
          </p>
        </section>
      </div>
    </main>
  )
}
