import Image from "next/image";
import styles from "./SkillDetails.module.css";

import Title from "./Title";

import DigitalMarketing_SEO from "../images/DigitalMarketing_SEO.png";
export default function SkillDetails({
  id,
  title,
  technologies,
  frameworks,
  backend,
  other,
}) {
  return (
    <section className={styles["section-padding"]}>
      <div className={styles["skills-table"]}>
        <Title id={id} title={title} />
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
        <Image src={DigitalMarketing_SEO} className={styles.img} />
      </div>
    </section>
  );
}
