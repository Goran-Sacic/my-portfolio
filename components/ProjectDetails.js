import Image from "next/image";
import styles from "./ProjectDetails.module.css";
import Link from "next/link";

export default function ProjectDetails({ title, myProjects, myOtherProjects }) {
  return (
    <section id="projects" className={styles["section-padding"]}>
      <div className={`${styles["projects-wrapper"]} ${styles.flex}`}>
        <h1>Izdvojeni demo projekti:</h1>
        {myProjects.map((project) => (
          <div
            key={project.id}
            className={`${styles["project-wrapper"]} ${styles.flex}`}
          >
            <div
              className={`${styles["project-image-wrapper"]} ${styles.flex} `}
            >
              <Link href={project.link}>
                <Image src={project.image} alt={project.alt} />
              </Link>
            </div>
            <div
              className={`${styles["project-description-wrapper"]} ${styles.flex}`}
            >
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>Tehnologije: {project.tehnologije}</p>
              <Link href={project.link}>
                <button className={styles.btn}>
                  <Image
                    src={project.buttonImg}
                    alt={project.buttonImgAlt}
                    className={styles.buttonImg}
                  />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles["projects-wrapper"]} ${styles.flex}`}>
        <h1>Ostali projekti:</h1>
        {myOtherProjects.map((project) => (
          <div
            key={project.id}
            className={`${styles["project-wrapper"]} ${styles.flex}`}
          >
            <div
              className={`${styles["project-image-wrapper"]} ${styles.flex} `}
            >
              <Link href={project.link}>
                <Image src={project.image} alt={project.alt} />
              </Link>
            </div>
            <div
              className={`${styles["project-description-wrapper"]} ${styles.flex}`}
            >
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>Tehnologije: {project.tehnologije}</p>
              <Link href={project.link}>
                <button className={styles.btn}>{project.button}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
