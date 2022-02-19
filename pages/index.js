import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "./src/components/Header";
import Services from "./src/components/Services";
import ContactCard from "./src/components/ContactCard";
import ScrollToTop from "./src/components/ScrollToTop";
import Booksy from "./src/components/Booksy";
import Carousel from "./src/components/Portfolio";
import Team from "./src/components/Team";

const myLoader = ({ src, width, quality }) => {
  return `https://drcutthebarbershow.web.app/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <Head>
        <title>Dr.Cut The Barber Show</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <Header myLoader={myLoader} />
        <Services />
        <Carousel  myLoader={myLoader} />
        <Team myLoader={myLoader} />
        <ContactCard />
        <Booksy />
      </main>

      <footer className="footer text-center">
        <a
          className="text-decoration-none text-dark"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
              loader={myLoader}
              
            />
          </span>
        </a>
      </footer>
      <ScrollToTop />
    </div>
  );
}
