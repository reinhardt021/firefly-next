import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import MenuRow from './MenuRow'
import styles from '../styles/Main.module.css'

const LIGHT = 'light';
const DARK = 'dark';
const BG1 = 'main--bg1';
const BG2 = 'main--bg2';
const BG3 = 'main--bg3';
const BACKGROUNDS = [ BG1, BG2, BG3 ];

const T_SANS = 'sans-serif';
const T_SERIF = 'serif';
const T_SCRIPT = 'script';

const T_SMALL = 'small';
const T_MEDIUM = 'medium';
const T_LARGE = 'large';

export default function Main() {
  const [mode, setMode] = useState(LIGHT);
  const [bgStyle, setBgStyle] = useState(BG2);
  const [textFamily, setTextFamily] = useState(T_SANS);
  const [textSize, setTextSize] = useState(T_MEDIUM);
  const fontItem = {
    title: 'F',
  };
  const fontOptions = [
    {
      id: 'f1',
      title: (<span className={styles['menu__option--sans-serif']}>F</span>),
      selected: true,
      handleClick: () => setTextFamily(T_SANS),
    },
    {
      id: 'f2',
      title: (<span className={styles['menu__option--serif']}>F</span>),
      selected: false,
      handleClick: () => setTextFamily(T_SERIF),
    },
    {
      id: 'f3',
      title: (<span className={styles['menu__option--script']}>F</span>),
      selected: false,
      handleClick: () => setTextFamily(T_SCRIPT),
    },
  ];
  const sizeItem = {
    title: 'S'
  };
  const sizeOptions = [
    {
      id: 's1',
      title: (<span className={styles['menu__option--small']}>S</span>),
      selected: false,
      handleClick: () => setTextSize(T_SMALL),
    },
    {
      id: 's2',
      title: (<span className={styles['menu__option--medium']}>S</span>),
      selected: true,
      handleClick: () => setTextSize(T_MEDIUM),
    },
    {
      id: 's3',
      title: (<span className={styles['menu__option--large']}>S</span>),
      selected: false,
      handleClick: () => setTextSize(T_LARGE),
    },
  ];
  const bgItem = {
    title: '🔘'
  };
  const shuffleBg = () => {
    setBgStyle(currBG => {
      const bgs = BACKGROUNDS.filter(bg => bg != currBG);
      const newBG = bgs[Math.floor(Math.random() * bgs.length)]
      console.log(`CURR [${currBG}] NEW [${newBG}] from bgs:`, bgs);

      return newBG
    });
  };
  const bgOptions = [
    {
      id: 'b1',
      title: '⚪️',
      selected: true,
      handleClick: () => setMode(LIGHT),
    },
    {
      id: 'b2',
      title: '⚫️',
      selected: false,
      handleClick: () => setMode(DARK),
    },
    {
      id: 'b3',
      title: '꩜',
      selected: false,
      handleClick: shuffleBg,
    },
  ];
  const musicItem = {
    title: '🎵'
  };
  const musicOptions = [
    {
      id: 'm1',
      title: '🔥',
      selected: true,
    },
    {
      id: 'm2',
      title: '☁️',
      selected: false,
    },
    {
      id: 'm3',
      title: '🌊',
      selected: false,
    },
  ];
  const saveItem = {
    title: '💾'
  };
  const saveOptions = [
    {
      id: 'd1',
      title: '📄',
      selected: false,
    },
    {
      id: 'd2',
      title: '💌',
      selected: false,
    },
    {
      id: 'd3',
      title: '⬆',
      selected: true,
    },
  ];

  const bgStyles = [
    styles[bgStyle],
  ];
  const maskStyles = [
    styles['main__mask'],
    styles[`main__mask--${mode}`],
  ];
  const textStyles = [
    styles['text'],
    styles[`text--${mode}`],
    styles[`text--${textFamily}`],
    styles[`text--${textSize}`],
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
