import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Main.module.css'

const LIGHT = 'light';
const DARK = 'dark';
const BG1 = 'main--bg1';
const BG2 = 'main--bg2';
const BG3 = 'main--bg3';
const BACKGROUNDS = [
  BG1,
  BG2,
  BG3,
];


function MenuRow(props) {
  const [options, setOptions] = useState(props.options);
  const rowStyles = [
    styles['menu__row'],
  ];
  const itemClass = `menu__item--${props.mode}`
  const itemStyles = [
    styles['menu__item'],
    styles[itemClass],
  ];
  const optionClass = `menu__option--${props.mode}`
  const optionDefaultStyles = [
    styles['menu__item'],
    styles['menu__option'],
    styles[optionClass],
  ];
  const selectedClass = `menu__option--selected-${props.mode}`

  const updateSelected = (id, callback) => {
    // loop through options and change selected for ID?
    const newOptions = options.map(option => {
      option.selected = (id == option.id);

      return option;
    });
    setOptions(newOptions);
    if (callback) callback();
  };

  return (
    <div className={rowStyles.join(' ')}>
      <div className={itemStyles.join(' ')}>{props.item.title}</div>
      { options && options.map((option, index) => {
        const optionStyles = [ ...optionDefaultStyles ];
        if (option.selected) optionStyles.push(styles[selectedClass]) 

        return (
          <div key={index} 
            className={optionStyles.join(' ')} 
            onClick={() => updateSelected(option.id, option.handleClick)}
          >
            {option.title}
          </div>
        );
      }) }
    </div>
  );
}

export default function Main() {
  const [mode, setMode] = useState(LIGHT);
  const [bgStyle, setBgStyle] = useState(BG1);
  // TODO: move to state
  const fontItem = {
    title: 'F',
    // other part >> like what it does on click
  };
  const fontOptions = [
    {
      id: 'f1',
      title: 'F1',
      // other part >> like what it does on click
      selected: false,
    },
    {
      id: 'f2',
      title: 'F2',
      selected: true,
    },
    {
      id: 'f3',
      title: 'F3',
      selected: false,
    },
  ];
  const sizeItem = {
    title: 'S'
  };
  const sizeOptions = [
    {
      id: 's1',
      title: 'S1',
      // other part >> like what it does on click
      selected: false,
    },
    {
      id: 's2',
      title: 'S2',
      selected: false,
    },
    {
      id: 's3',
      title: 'S3',
      selected: true,
    },
  ];
  const bgItem = {
    title: '🔘'
  };
  const shuffleBg = () => {
    const bgs = BACKGROUNDS.filter(bg => bg != bgStyle);
    const bg = bgs[Math.floor(Math.random() * bgs.length)]
    setBgStyle(bg);
  };
  const bgOptions = [
    {
      id: 'b1',
      title: '⚪️',
      // other part >> like what it does on click
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
      handleClick: () => shuffleBg(),
    },
  ];
  const musicItem = {
    title: '🎵'
  };
  const musicOptions = [
    {
      id: 'm1',
      title: 'M1',
      // other part >> like what it does on click
      selected: true,
    },
    {
      id: 'm2',
      title: 'M2',
      selected: false,
    },
    {
      id: 'm3',
      title: 'M3',
      selected: false,
    },
  ];
  const saveItem = {
    title: '💾'
  };
  const saveOptions = [
    {
      id: 'd1',
      title: 'md',
      // other part >> like what it does on click
      selected: false,
    },
    {
      id: 'd2',
      title: 'ml',
      selected: false,
    },
    {
      id: 'd3',
      title: 'sy',
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
