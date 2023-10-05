import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Home from "./Home";
import Projects from "./Projects";
import ImageGallery from "./ImageGallery";
import Skills from "../pages/Skills";
import Contact from "./Contact";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Goran Sačić - Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio website frontend developer Goran Sačić"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.content} ${styles.main}`}>
        <Home />
        <Skills />
        <ImageGallery />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
