import Link from "next/link";
import styles from "./MainNavigation.module.css";
import Image from "next/image";
import logoGS from "../../logos/kruzni-ja2.png";
import { useState, useEffect } from "react";

function MainNavigation() {
  const [openNav, setOpenNav] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [disableAnimations, setDisableAnimations] = useState(false);

  const handleNavOpen = () => {
    setOpenNav(!openNav);
    setAriaExpanded((ariaExpanded) => !ariaExpanded);
  };

  const handleNavClose = () => {
    setOpenNav(false);
    setAriaExpanded(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setDisableAnimations(true);
      setTimeout(() => {
        setDisableAnimations(false);
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`${styles.flex} ${styles["primary-header"]}`}>
      <div>
        <div
          href="/"
          className={`${styles["logo-and-name-wrapper"]} ${styles.flex}`}
        >
          <Link href="/" className={`${styles.flex} ${styles.link}`}>
            <Image
              src={logoGS}
              className={styles.logo}
              alt="logotip frontend developera Gorana Sačića"
            />
            <p className={styles.name}>GORAN SAČIĆ</p>
          </Link>
        </div>
      </div>
      <button
        onClick={handleNavOpen}
        className={styles["mobile-nav-toggle"]}
        aria-controls="primary-navigation"
        aria-expanded={ariaExpanded}
      >
        <span className={styles["sr-only"]}>Izbornik</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={`${styles["primary-navigation"]} ${styles.flex} ${
            openNav ? styles["primary-navigation-open"] : ""
          } ${disableAnimations ? styles.noAnimations : ""}`}
        >
          <li>
            <Link href="#welcome" onClick={handleNavClose}>
              HOME
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={handleNavClose}>
              O MENI
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={handleNavClose}>
              PROJEKTI
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={handleNavClose}>
              KONTAKT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
