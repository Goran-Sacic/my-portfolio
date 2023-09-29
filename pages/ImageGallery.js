import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";
import s6 from "../images/s6.jpg";
import s7 from "../images/s7.jpg";
import s8 from "../images/s8.jpg";
import s9 from "../images/s9.jpg";
import s10 from "../images/s10.png";
import s11 from "../images/s11.jpg";
import s12 from "../images/s12.jpg";
import s13 from "../images/s13.jpg";
import s14 from "../images/s14.jpg";

import Title from "../components/Title";
import ImageDetails from "../components/ImageDetails";
import styles from "./ImageGallery.module.css";

const images = [
  {
    id: "its-me-1",
    desc: "Hello there!",
    img: s1,
    alt: "Fotografija - Goran Sačić",
  },
  {
    id: "its-me-2",
    desc: "It's a me!!",
    img: s2,
    alt: "Fotografija - Goran Sačić na moru",
  },
  {
    id: "leisure-time-1",
    desc: "U slobodno vrijeme bavim se fotografijom!",
    img: s3,
    alt: "Fotografija - zelena polja, planine, plavo nebo, sunce iza oblaka",
  },
  {
    id: "leisure-time-2",
    desc: "Kao pravi Zagorec ponekad znam popiti...",
    img: s4,
    alt: "Fotografija - Goran Sačić i čaša gemišta",
  },
  {
    id: "my-games-1",
    desc: "Neke od mojih omiljenih igara...",
    img: s5,
    alt: "Igre: Age of Empires, Broken Sword, Skyrim, PUBG",
  },
  {
    id: "my-games-2",
    desc: "I još neke igre...",
    img: s6,
    alt: "Igre: Rocket League, Stellaris, Titanfall 2, Valheim",
  },
  {
    id: "favourite-media-1",
    desc: "Tu i tam pogledam koji horor!",
    img: s7,
    alt: "najčešći komentar kad glediš horor: pa kam te vrag jebe",
  },
  {
    id: "favourite-media-2",
    desc: "Sapunice me tjeraju na mozganje...",
    img: s8,
    alt: "Sapunica: tvoj momak je sin ljubavnice moga muža? - Ne vrijeđajte mi majku!",
  },
  {
    id: "favourite-clubs-1",
    desc: "Navijam za NK Varaždin!!",
    img: s9,
    alt: "Nogometni klub Varaždin sprema se započeti ligašku utakmicu - slika terena i igrača na terenu okinuta sa lijeve tribine!",
  },
  {
    id: "favourite-clubs-2",
    desc: "A može i Arsenal!",
    img: s10,
    alt: "slika grba nogometnog kluba Arsenal (Engleska, London)",
  },
  {
    id: "favourite-food-1",
    desc: "Pogodite moju omiljenu hranu, hint, počinje sa P i I!!",
    img: s11,
    alt: "Slika slasne narezane Pizze spremne za papanje mmm, vrsta pizze: slavonska, a u pozadini svježa rajčica i šampinjoni",
  },
  {
    id: "political-values-1",
    desc: "Moja politička orijentacija",
    img: s12,
    alt: "tko daje više za njega glasam",
  },
  {
    id: "german-shepherd-1",
    desc: "Max, svugdje se guraš!",
    img: s13,
    alt: "slika mojeg kućnog ljubimca, njemačkog ovčara Maxa",
  },
  {
    id: "its-me-3",
    desc: "I jedna ošpitna za kraj",
    img: s14,
    alt: "još jedna moja fotografija, blagi izraz lica, blagonakloni, pomalo supijan",
  },
];

const title = "Tko sam zapravo ja?";
/* const id = "about"; */

function ImageGallery() {
  return (
    <div>
      <Title /* id={id}  */ title={title} />
      <ImageDetails images={images} />
    </div>
  );
}

export default ImageGallery;

/* <div className={styles.text}>
      <div id="about" className={styles.hidden}></div>
      <h1>Tko sam ja?</h1>
      <ImageDetails images={images} />
    </div> */
