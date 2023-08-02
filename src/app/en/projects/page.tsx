import { Metadata } from "next";
import { projects } from "../../../data/info-en";
import styles from "./page.module.css"
import Link from "next/link";


export const metadata: Metadata = {
    title: "José Miguel Carvajal Jiménez - Projects",
}

export default function Proyectos() {

    return (
        <main>
            <br /><br />
            <p className={styles.description}>
                This is a collection of projects I&apos;ve done to learn new technologies,
                complete certificates or to practice my skills.
                <br /><br />
                These projects are of various types, which range from Full-Stack applications,
                desktop applications, API&apos;s, to Front-end applications (SPA&apos;s).
                <br /><br />
                Each card will redirect you to a GitHub repository or to the place where the project
                is deployed. Most of the projects are deployed. The links will be indicated
                in the project repositories.
                <br /><br />
                The only exception are the Full-Stack applications. Initially, they were all deployed,
                but due to the costs related to their maintenance (Web Services, Databases, etc.)
                the links mentioned in the repositories may be down.
                <br /><br />
                Please check out my GitHub account to see any new projects that I make, or if there are projects
                that are not mentioned on this page.
            </p>
            <p className={styles.title}>My Projects</p>
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