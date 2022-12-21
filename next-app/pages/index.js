import Head from 'next/head'
import styles from '../styles/Main.module.css'

export default function Main() {

  return (
    <>
      <Head>
        <title>Firefly</title>
        <meta name="description" content="Your space to write down that spark of an idea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className={`${styles['body__mask']} ${styles['body__mask--dark']}`}>
        <div className={styles.row}>
          <textarea className={`${styles.main} ${styles['main--dark']}`} autofocus></textarea>

          <div className={styles.menu}>
            <div className="menu__row">
              <div className="menu__item menu__item--dark">F</div>
              <div className="menu__item menu__option menu__option--dark">F1</div>
              <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">F2</div>
              <div className="menu__item menu__option menu__option--dark">F3</div>
            </div>

            <div className="menu__row">
              <div className="menu__item menu__item--dark">S</div>
              <div className="menu__item menu__option menu__option--dark">S1</div>
              <div className="menu__item menu__option menu__option--dark">S2</div>
              <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">S3</div>
            </div>

            <div className="menu__row">
              <div className="menu__item menu__item--dark">⚪️</div>
              <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">B1</div>
              <div className="menu__item menu__option menu__option--dark">B2</div>
              <div className="menu__item menu__option menu__option--dark">B3</div>
            </div>

            <div className="menu__row">
              <div className="menu__item menu__item--dark">🎵</div>
              <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">M1</div>
              <div className="menu__item menu__option menu__option--dark">M2</div>
              <div className="menu__item menu__option menu__option--dark">M3</div>
            </div>

            <div className="menu__row">
              <div className="menu__item menu__item--dark">⌨️</div>
              <div className="menu__item menu__option menu__option--dark">K1</div>
              <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">K2</div>
              <div className="menu__item menu__option menu__option--dark">K3</div>
            </div>

            <div className="menu__row">
              <div className="menu__item menu__item--dark">💾</div>
              <div className="menu__item menu__option menu__option--dark">md</div>
              <div className="menu__item menu__option menu__option--dark">ml</div>
              <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">sy</div>
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
