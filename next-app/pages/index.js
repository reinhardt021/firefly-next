import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Main.module.css'

function MenuRow(props) {
  const itemClass = `menu__item--${props.mode}`
  const optionClass = `menu__option--${props.mode}`
  const selectedClass = `menu__option--selected-${props.mode}`

  return (
    <div className={styles['menu__row']}>
      <div className={[styles['menu__item'], styles[itemClass]].join(' ')}>{props.item.title}</div>
      { props.options && props.options.map((option, index) => {
        const optionStyles = [
          styles['menu__item'],
          styles['menu__option'],
          styles[optionClass],
        ];
        if (option.selected) {
          optionStyles.push(styles[selectedClass])
        } 

        return <div key={index} className={optionStyles.join(' ')} onClick={option.handleClick}>{option.title}</div>
      }) }
    </div>
  );
}

export default function Main() {
  const [mode, setMode] = useState('light');
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
      handleClick: () => setMode('light'),
    },
    {
      title: 'B2',
      selected: false,
      handleClick: () => setMode('dark'),
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

  const bgStyles = [
    styles['main--bg3'],
  ];
  const maskStyles = [
    styles['main__mask'],
    styles[`main__mask--${mode}`],
  ];
  const textStyles = [
    styles['text'],
    styles[`text--${mode}`],
  ];
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <>
      <Head>
        <title>Firefly</title>
        <meta name="description" content="Your space to write down that spark of an idea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className={bgStyles.join(' ')}>
        <div className={maskStyles.join(' ')}>

          <div className={styles.row}>
            <textarea className={textStyles.join(' ')} ref={textInput}></textarea>

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
