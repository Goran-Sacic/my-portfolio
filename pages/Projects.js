import ReactEvents_1 from "../images/ReactEvents_1.png";
import GoGoFood from "../images/GoGoFood.png";
import ChatApp from "../images/ChatApp.png";
import ExpensesApp from "../images/ExpensesApp.png";
import KalkulatorUlaganja from "../images/KalkulatorUlaganja.png";
import MyPortfolio from "../images/MyPortfolio.png";
import Netlify from "../logos/Netlify.png";
import GitHubLogoWide from "../logos/GitHub logo wide.png";
import Playart from "../images/Playart.png";
/* import PlayartLogo from "../logos/PlayArt.jpg"; */

import ProjectDetails from "../components/ProjectDetails";

const myProjects = [
  {
    id: "ExpensesApp",
    name: "ExpensesApp",
    image: ExpensesApp,
    alt: "Aplikacija za praćenje troškova",
    description:
      "Jednostavna aplikacija za praćenje troškova. Podržava unos novih troškova i filtriranje po godinama.",
    link: "https://expenses-app-gs.netlify.app/",
    button: "DEMO",
    buttonImg: Netlify,
    buttonImgAlt: "Netlify logo, sličica i tekst",
    tehnologije: "ReactJS",
  },
  /* {
    name: "Kalkulator ulaganja",
    image: KalkulatorUlaganja,
    alt: "Aplikacija za izračunavanje povrata ulaganja",
    description:
      "Izračunajte koliko novaca možete uštedjeti koristeći ovu jednostavnu aplikaciju. Nikad nije prekasno za ulaganja! (disclaimer: autor ove aplikacije ne odgovara za eventualni izgubljeni uloženi iznos)",
    link: "https://investment-calculator-gs.netlify.app/",
    button: "DEMO",
    buttonImg: Netlify,
    buttonImgAlt: "Netlify logo",
    tehnologije: "ReactJS",
  }, */
  {
    id: "Bla bla - ChatApp",
    name: "Bla bla - ChatApp",
    image: ChatApp,
    alt: "Aplikacija za chattanje koristeći ScaledroneAPI",
    description:
      "Chattanje u novom ruhu na stari način! Unesite svoje ime, odaberite boju i chattajte do mile volje... hint: za testiranje otvoriti dva taba!",
    link: "https://n7chatapp.netlify.app/",
    button: "DEMO",
    buttonImg: Netlify,
    buttonImgAlt: "Netlify logo, sličica i tekst",
    tehnologije: "ReactJS, Scaledrone",
  },
  {
    id: "GoGo Food!",
    name: "GoGo Food!",
    image: GoGoFood,
    alt: "Aplikacija za naručivanje hrane",
    description:
      "Aplikacija za naručivanje hrane! Naručite vrhunsku hranu od vašeg omiljenog restorana... u slast!",
    link: "https://food-order-app-gs.netlify.app/",
    button: "DEMO",
    buttonImg: Netlify,
    buttonImgAlt: "Netlify logo, sličica i tekst",
    tehnologije: "ReactJS, Firebase backend",
  },
  {
    id: "React Events",
    name: "React Events",
    image: ReactEvents_1,
    alt: "Aplikacija za prikaz, unos i modificiranje događaja",
    description:
      "Prikaz različitih događaja korištenjem Tanstack Queryja i custom dummy backenda (outside source). Podržava search funkciju, dodavanje događaja, uređivanje događaja...",
    link: "https://github.com/Goran-Sacic/tanstack-query-1",
    button: "GitHub code",
    buttonImg: GitHubLogoWide,
    buttonImgAlt: "GitHub tekstualni logo",
    tehnologije: "ReactJS, Tanstack Query, ReactRouter",
  },
  {
    id: "Portfolio page",
    name: "Portfolio page",
    image: MyPortfolio,
    alt: "Moj portfolio",
    description:
      "Ovaj portfolio rađen je koristeći NextJS framework. Kôd je dostupan na GitHub-u.",
    link: "https://github.com/Goran-Sacic/my-portfolio",
    button: "GitHub code",
    buttonImg: GitHubLogoWide,
    buttonImgAlt: "GitHub tekstualni logo",
    tehnologije: "NextJS, Vercel hosting, EmailJS",
  },
];

const myOtherProjects = [
  {
    id: "PlayArt",
    name: "PlayArt rođendaonica",
    image: Playart,
    alt: "Playart rođendaonica",
    description: "Web stranica PlayArt rođendaonica izrađena u Wordpressu.",
    link: "https://www.playart.com.hr/",
    button: "PlayArt",
    /* buttonImg: PlayartLogo,
    buttonImgAlt: "PlayArt rođendaonica logo", */
    tehnologije: "Wordpress",
  },
];

const title = "Izdvojeni projekti:";

export default function Projects() {
  return (
    <ProjectDetails
      title={title}
      myProjects={myProjects}
      myOtherProjects={myOtherProjects}
    />
  );
}
