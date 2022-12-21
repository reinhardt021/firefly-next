import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Main.module.css'

function MenuRow(props) {
  const [itemClass, setItemClass] = useState((props.mode && `menu__item--${props.mode}`) || 'menu__item--dark');
  const [optionClass, setOptionClass] = useState((props.mode && `menu__option--${props.mode}`) || 'menu__option--dark');
  const [selectedClass, setSelectedClass] = useState((props.mode && `menu__option--selected-${props.mode}`) || 'menu__option--selected-dark');
  return (
    <div className={styles['menu__row']}>
      <div className={[styles['menu__item'], styles[itemClass]].join(' ')}>{props.item.title}</div>
      { props.options && props.options.map((option) => {
        const optionStyles = [
          styles['menu__item'],
          styles[optionClass],
        ];
        if (option.selected) {
          optionStyles.push(styles[selectedClass])
        } 

        return <div className={optionStyles.join(' ')}>{option.title}</div>
      }) }
    </div>
  );
}

export default function Main() {
  // TODO: move to state
  const mode = 'light';
  const fontItem = {
    title: 'F',
    // other part >> like what it does on click
  };
  const fontOptions = [
    {
      title: 'F1',
      // other part >> like what it does on click
      selected: false,
    },
    {
      title: 'F2',
      // other part >> like what it does on click
      selected: true,
    },
    {
      title: 'F3',
      // other part >> like what it does on click
      selected: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Firefly</title>
        <meta name="description" content="Your space to write down that spark of an idea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className={styles['main--bg3']}>
        <div className={`${styles['main__mask']} ${styles['main__mask--light']}`}>
          <div className={styles.row}>
            <textarea className={`${styles.text} ${styles['text--light']}`} autofocus></textarea>

            <div className={styles.menu}>
              <MenuRow mode={mode} item={fontItem} options={fontOptions} />
              <div className={styles['menu__row']}>
                <div className="menu__item menu__item--dark">F</div>
                <div className="menu__item menu__option menu__option--dark">F1</div>
                <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">F2</div>
                <div className="menu__item menu__option menu__option--dark">F3</div>
              </div>

              <div className={styles['menu__row']}>
                <div className="menu__item menu__item--dark">S</div>
                <div className="menu__item menu__option menu__option--dark">S1</div>
                <div className="menu__item menu__option menu__option--dark">S2</div>
                <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">S3</div>
              </div>

              <div className={styles['menu__row']}>
                <div className="menu__item menu__item--dark">⚪️</div>
                <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">B1</div>
                <div className="menu__item menu__option menu__option--dark">B2</div>
                <div className="menu__item menu__option menu__option--dark">B3</div>
              </div>

              <div className={styles['menu__row']}>
                <div className="menu__item menu__item--dark">🎵</div>
                <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">M1</div>
                <div className="menu__item menu__option menu__option--dark">M2</div>
                <div className="menu__item menu__option menu__option--dark">M3</div>
              </div>

              <div className={styles['menu__row']}>
                <div className="menu__item menu__item--dark">⌨️</div>
                <div className="menu__item menu__option menu__option--dark">K1</div>
                <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">K2</div>
                <div className="menu__item menu__option menu__option--dark">K3</div>
              </div>

              <div className={styles['menu__row']}>
                <div className="menu__item menu__item--dark">💾</div>
                <div className="menu__item menu__option menu__option--dark">md</div>
                <div className="menu__item menu__option menu__option--dark">ml</div>
                <div className="menu__item menu__option menu__option--dark menu__option--selected-dark">sy</div>
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}
