import { Metadata } from "next";
import { projects } from "../../data/info-es";
import styles from "./page.module.css"
import Link from "next/link";

export const metadata: Metadata = {
  title: "José Miguel Carvajal Jiménez - Proyectos",
}

export default function Proyectos() {

  return (
    <main>
      <br /><br />
      <p className={styles.description}>
        Esta es una colección de proyectos que he hecho para aprender nuevas tecnologías,
        completar certificados o para practicar mis habilidades.
        <br /><br />
        Estos proyectos son de varios tipos, los cuales abarcan desde aplicaciones Full-Stack,
        aplicaciones de escritorio, API&apos;s, hasta aplicaciones Front-end (SPA&apos;s).
        <br /><br />
        Cada tarjeta te redireccionará a un repositorio de GitHub o al lugar donde el proyecto
        esté desplegado. La mayoría de los proyectos están desplegados. Los links estarán indicados
        en los repositorios de los proyectos.
        <br /><br />
        La única excepción son las aplicaciones Full-Stack. Inicialmente, todas fueron desplegadas,
        pero debido a los costos relacionados con su mantenimiento (Servicios web, Bases de datos, etc.)
        puede que los links mencionados en los repositorios estén caídos.
        <br /><br />
        Te invito a que revises mi cuenta de GitHub para ver nuevos proyectos que realice, o si hay proyectos
        que no estén mencionados en esta página.
      </p>
      <p className={styles.title}>Mis Proyectos</p>
      <div className={styles.cards}>
        {projects.map((project) => (
          <div className={styles.cardscontainer} key={project.id}>
            <Link href={project.link} target="_blank" className={styles.cardslink}>
              <img
                src={project.image}
                alt={project.title}
              />
              <p className={styles.centered}>

                {project.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
