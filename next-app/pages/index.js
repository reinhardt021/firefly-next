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
          styles['menu__option'],
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
  //const [mode, setMode] = useState('light');
  const [mode, setMode] = useState('dark');
  // TODO: move to state
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
      selected: true,
    },
    {
      title: 'F3',
      selected: false,
    },
  ];
  const sizeItem = {
    title: 'S'
  };
  const sizeOptions = [
    {
      title: 'S1',
      // other part >> like what it does on click
      selected: false,
    },
    {
      title: 'S2',
      selected: false,
    },
    {
      title: 'S3',
      selected: true,
    },
  ];
  const bgItem = {
    title: '⚪️'
  };
  const bgOptions = [
    {
      title: 'B1',
      // other part >> like what it does on click
      selected: true,
    },
    {
      title: 'B2',
      selected: false,
    },
    {
      title: 'B3',
      selected: false,
    },
  ];
  const musicItem = {
    title: '🎵'
  };
  const musicOptions = [
    {
      title: 'M1',
      // other part >> like what it does on click
      selected: true,
    },
    {
      title: 'M2',
      selected: false,
    },
    {
      title: 'M3',
      selected: false,
    },
  ];
  const saveItem = {
    title: '💾'
  };
  const saveOptions = [
    {
      title: 'md',
      // other part >> like what it does on click
      selected: false,
    },
    {
      title: 'ml',
      selected: false,
    },
    {
      title: 'sy',
      selected: true,
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
        <div className={[styles['main__mask'], styles[`main__mask--${mode}`]].join(' ')}>
          <div className={styles.row}>
            <textarea className={[styles['text'], styles[`text--${mode}`]].join(' ')} autofocus></textarea>

            <div className={styles.menu}>
              <MenuRow mode={mode} item={fontItem} options={fontOptions} />
              <MenuRow mode={mode} item={sizeItem} options={sizeOptions} />
              <MenuRow mode={mode} item={bgItem} options={bgOptions} />
              <MenuRow mode={mode} item={musicItem} options={musicOptions} />
              <MenuRow mode={mode} item={saveItem} options={saveOptions} />
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
