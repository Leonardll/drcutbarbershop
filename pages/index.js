import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from './src/components/Header'
import Services from './src/components/Services'

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Dr Cut TheBarber Show</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
       <Header />
       <Services />
      </main>

      <footer className="footer text-center">
        <a
          className="text-decoration-none text-dark"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      </div>
    
  )
}
