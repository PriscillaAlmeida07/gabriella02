import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu Título</title>
      </Head>

      <main className={styles.main}>
        <h1>Gabriella Almeida</h1>
      </main>

      <style jsx>{`
        /* Estilos para o degradê de fundo */
        body {
          background: linear-gradient(to right, #ff8a00, #ff0084);
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Estilos para o elemento h1 */
        h1 {
          font-size: 36px;
          color: white;
          text-align: center;
          text-transform: uppercase;
          padding: 20px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
