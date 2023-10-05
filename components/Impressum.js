import styles from "./Impressum.module.css";
import GithubBlack from "../logos/Github_black.png";
import LinkedIn_white from "../logos/LinkedIn_white.png";

import Image from "next/image";
import Link from "next/link";

function Impressum() {
  return (
    <div className={styles.impressumWrapper}>
      <div>
        <div className={styles.objectsWrapper}>
          <div className={styles.objectWrapper}>
            <h3>GORAN SAČIĆ</h3>
            <p>
              Frontend developer fokusiran na izradu vrhunskih web stranica i
              aplikacija.
            </p>
          </div>
          <div className={styles.objectWrapper2}>
            <h3>SOCIALS</h3>
            <div>
              <Link href="https://www.linkedin.com/in/goran-sa%C4%8Di%C4%87-b6b4351a7/">
                <Image
                  src={LinkedIn_white}
                  className={styles.logoImg}
                  alt="LinkedIn logo"
                />
              </Link>
              <Link href="https://github.com/Goran-Sacic">
                <Image
                  src={GithubBlack}
                  className={styles.logoImg}
                  alt="GitHub logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.copyright}>
        <p>© Copyright 2023. Built by Goran Sačić</p>
      </div>
    </div>
  );
}

export default Impressum;
