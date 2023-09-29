import HTML from "../logos/HTML.png";
import CSS from "../logos/CSS.png";
import JavaScript from "../logos/JavaScript.png";
import ReactJS from "../logos/ReactJS.png";
import NextJS from "../logos/NextJS.png";
import Firebase from "../logos/Firebase.png";
import GitHub from "../logos/GitHub.png";
import Wordpress from "../logos/Wordpress.png";

import SkillDetails from "../components/SkillDetails";

const technologies = [
  {
    id: "HTML",
    img: HTML,
    name: "HTML",
    alt: "HTML logo",
  },
  {
    id: "CSS",
    img: CSS,
    name: "CSS",
    alt: "CSS logo",
  },
  {
    id: "JS",
    img: JavaScript,
    name: "JavaScript",
    alt: "JavaScript logo",
  },
];

const frameworks = [
  {
    id: "ReactJS",
    img: ReactJS,
    name: "ReactJS",
    alt: "ReactJS logo",
  },
  {
    id: "NextJS",
    img: NextJS,
    name: "NextJS",
    alt: "NextJS logo",
  },
];

const backend = [
  {
    id: "Firebase",
    img: Firebase,
    name: "Firebase",
    alt: "Firebase logo",
  },
];

const other = [
  {
    id: "GitHub",
    img: GitHub,
    name: "GitHub",
    alt: "GitHub logo",
  },
  {
    id: "Wordpress",
    img: Wordpress,
    name: "Wordpress",
    alt: "Wordpress logo",
  },
];

const title = "Vještine";

export default function Skills() {
  return (
    <SkillDetails
      title={title}
      technologies={technologies}
      frameworks={frameworks}
      backend={backend}
      other={other}
    />
  );
}

{
  /* <section className={styles["section-padding"]}>
    <div className={styles["skills-table"]}>
      <h1>Vještine</h1>
      <div className={styles["skills-table-populated"]}>
        <div className={styles["skills-table-row"]}>
          <h2>Tehnologije</h2>
          {technologies.map((tehn) => (
            <div key={tehn.id} className={styles["skills-description"]}>
              <Image src={tehn.img} className={styles.logo} alt={tehn.alt} />
              <p>{tehn.name}</p>
            </div>
          ))}
        </div>

        <div className={styles["skills-table-row"]}>
          <h2>Frameworks</h2>
          {frameworks.map((framework) => (
            <div key={framework.id} className={styles["skills-description"]}>
              <Image
                src={framework.img}
                className={styles.logo}
                alt={framework.alt}
              />
              <p>{framework.name}</p>
            </div>
          ))}
        </div>
        <div className={styles["skills-table-row"]}>
          <h2>Backend</h2>
          {backend.map((backend) => (
            <div key={backend.id} className={styles["skills-description"]}>
              <Image
                src={backend.img}
                className={styles.logo}
                alt={backend.alt}
              />
              <p>{backend.name}</p>
            </div>
          ))}
        </div>

        <div className={styles["skills-table-row"]}>
          <h2>Drugo</h2>
          {other.map((other) => (
            <div key={other.id} className={styles["skills-description"]}>
              <Image
                src={other.img}
                className={styles.logo}
                alt={other.alt}
              />
              <p>{other.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section> */
}
