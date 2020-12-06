import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className={styles.container}>
        <main className={styles.main}>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{' '}
            <Link href="/about">
              <a>About</a>
            </Link>
          </nav>
          {children}
        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
