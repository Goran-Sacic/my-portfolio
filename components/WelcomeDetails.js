import Link from "next/link";
import styles from "./WelcomeDetails.module.css";
import Image from "next/image";
/* import astronaut from "../images/astronaut-and-night-city.png"; */
import FrontendDeveloper from "../images/frontend-developer.png";

export default function WelcomeDetails() {
  const text = "Frontend developer";
  const letters = text.split("");

  const handleHover = (e) => {
    e.target.style.opacity = "0";
  };

  const handleMouseLeave = (e) => {
    e.target.style.opacity = "1";
  };

  return (
    <div>
      <div id="welcome" className={styles.home}>
        <h2>
          DOBRODOŠLI NA MOJU STRANICU, JA SAM{" "}
          <span
            style={{
              color: "rgb(189, 46, 189)",
              opacity: 100,
              fontWeight: "700",
            }}
          >
            GORAN
          </span>
        </h2>

        {/* <div className={styles.homeImgWrapper}>
          <Image src={astronaut} className={styles.homeImg} />
        </div> */}
        {/* <div className={`${styles.frontend} ${styles.lineThrough}`}>
          Astronaut
        </div> */}

        <div className={styles.frontend}>
          {letters.map((letter, index) => (
            <span
              key={index}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              {letter}
            </span>
          ))}
        </div>
        <Image
          src={FrontendDeveloper}
          className={styles.frontendImg}
          alt="Frontend developer tools"
        />
        <div>
          <p>
            Moja misija je izrada vrhunskih sučelja koja pružaju sjajno
            korisničko iskustvo.
          </p>
        </div>
        <div>
          <p>
            Trenutno tražim poslovne prilike za daljnji razvoj moje developer
            karijere.
          </p>
        </div>
        <div>
          <p>
            Pregledajte stranicu i moje projekte i saznajte što mogu učiniti za
            Vas!
          </p>
        </div>
        <Link href="#projects">
          <button className={styles.btn}>PROJEKTI</button>
        </Link>
        <div className={styles["scroll-down-mouse-effect"]}>
          <div className={styles.mouse}>
            <div className={styles.scroll}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
