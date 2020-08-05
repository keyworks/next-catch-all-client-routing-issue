import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <ol>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/page1'><a>Page 1</a></Link></li>
            <li><Link href='/page2'><a>Page 2</a></Link></li>
          </ol>
        </div>
        <div>
          {router.asPath}
        </div>
      </main>
    </div>
  )
}
