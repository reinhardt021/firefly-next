import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import MenuRow from '../components/MenuRow'
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

const A1 = '/audio/AUD-01-Fire-sound-effect.mp3'
const A2 = '/audio/AUD-02-Windy-stormy-night-sound-effect.mp3'
const A3 = '/audio/AUD-03-free-ocean-waves-sound.mp3'

// MENU ITEMS
const I_BG = 'bg';
const I_MUSIC = 'music';
const I_SIZE = 'size';
const I_FONT = 'font';
const I_SAVE = 'save';

export default function Main() {
  const [mode, setMode] = useState(LIGHT);
  const [bgStyle, setBgStyle] = useState(BG1);
  const [audioFile, setAudioFile] = useState(A2);
  const [volume, setVolume] = useState(90);
  const [textSize, setTextSize] = useState(T_MEDIUM);
  const [textFamily, setTextFamily] = useState(T_SANS);
  const [isTyping, setIsTyping] = useState(false);
  const [note, setNote] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const fontOptions = [
    {
      id: 'f1',
      title: (<span className={styles['menu__option--sans-serif']}>F</span>),
      hoverTitle: 'Sans Serif Font',
      selected: true,
      handleClick: () => setTextFamily(T_SANS),
    },
    {
      id: 'f2',
      title: (<span className={styles['menu__option--serif']}>F</span>),
      hoverTitle: 'Serif Font',
      selected: false,
      handleClick: () => setTextFamily(T_SERIF),
    },
    {
      id: 'f3',
      title: (<span className={styles['menu__option--script']}>F</span>),
      hoverTitle: 'Script Font',
      selected: false,
      handleClick: () => setTextFamily(T_SCRIPT),
    },
  ];

  const sizeOptions = [
    {
      id: 's1',
      title: (<span className={styles['menu__option--small']}>S</span>),
      hoverTitle: 'Small Font Size',
      selected: false,
      handleClick: () => setTextSize(T_SMALL),
    },
    {
      id: 's2',
      title: (<span className={styles['menu__option--medium']}>S</span>),
      hoverTitle: 'Medium Font Size',
      selected: true,
      handleClick: () => setTextSize(T_MEDIUM),
    },
    {
      id: 's3',
      title: (<span className={styles['menu__option--large']}>S</span>),
      hoverTitle: 'Large Font Size',
      selected: false,
      handleClick: () => setTextSize(T_LARGE),
    },
  ];

  const bgOptions = [
    {
      id: 'b1',
      title: '☀',
      hoverTitle: 'Light Mode',
      selected: true,
      handleClick: () => setMode(LIGHT),
    },
    {
      id: 'b2',
      title: '☽',
      hoverTitle: 'Dark Mode',
      selected: false,
      handleClick: () => setMode(DARK),
    },
    {
      id: 'b3',
      title: '🔀',
      hoverTitle: 'Shuffle Background',
      selected: false,
      handleClick: () => setBgStyle(currBG => {
        const bgs = BACKGROUNDS.filter(bg => bg != currBG);
        const newBG = bgs[Math.floor(Math.random() * bgs.length)]

        return newBG
      }),
    },
  ];

  let audio = null;
  const musicOptions = [
    {
      id: 'm1',
      title: '🔥',
      hoverTitle: 'Crackling Fire',
      selected: false,
      handleClick: () => setAudioFile(oldFile => {
        setupAudio(A1, volume);
        return A1;
      }),
    },
    {
      id: 'm2',
      title: '🌧️',
      hoverTitle: 'Wind & Rain',
      selected: true,
      handleClick: () => setAudioFile(oldFile => {
        setupAudio(A2, volume);
        return A2;
      }),
    },
    {
      id: 'm3',
      title: '🌊',
      hoverTitle: 'Crashing Waves',
      selected: false,
      handleClick: () => setAudioFile(oldFile => {
        setupAudio(A3, (volume / 5)); // have to do part of the volume becuase it is so loud
        return A3;
      }),
    },
  ];

  const saveOptions = [
    {
      id: 'd1',
      title: '📄',
      hoverTitle: 'Save to File',
      selected: false,
      handleClick: () => {
        const element = document.createElement('a');
        const file = new Blob([document.getElementById('input-text').value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = 'firefly-note.txt';
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
        document.body.appendChild(element);
        element.click();
      },
    },
    {
      id: 'd2',
      title: '💌',
      hoverTitle: 'Email Text',
      selected: false,
      handleClick: () => {
        const textBody = document.getElementById('input-text').value;
        const params = {
          Subject: '',
          body: textBody,
        };
        const sParams = new URLSearchParams(params).toString();
        const mailHREF = `mailto:?${sParams}`

        const element = document.createElement('a');
        element.href = mailHREF;
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
        document.body.appendChild(element);
        element.click();
      },
    },
  ];

  const items = {
    [I_BG]: {
      title: '🌄',
      hoverTitle: 'Display Settings',
      options: bgOptions,
    },
    [I_MUSIC]: {
      title: '🎧',
      hoverTitle: 'Ambient Sounds',
      options: musicOptions,
    },
    [I_SIZE]: {
      title: 'sS',
      hoverTitle: 'Font Sizing',
      options: sizeOptions,
    },
    [I_FONT]: {
      title: 'F',
      hoverTitle: 'Font Styling',
      options: fontOptions,
    },
    [I_SAVE]: {
      title: '⬇',
      hoverTitle: 'Save Options',
      options: saveOptions,
    },
  };

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
  const menuStyles = [
    styles['menu'],
  ];
  if (isTyping) {
    textStyles.push(styles['text--typing']);
    menuStyles.push(styles['menu--typing']);
  }

  const setupAudio = (filename, vol = 60, loop = true) => {
    if (audio) audio.pause();
    const newAudio = new Audio(filename);
    newAudio.load();
    newAudio.autoplay = true;
    newAudio.volume = vol / 100;
    newAudio.loop = loop;
    newAudio.play()
      .then(_ => {
        audio = newAudio;
      })
      .catch(err => {
        console.err('err', err);
        audio = null;
      });

    return newAudio;
  };

  const handleMouseMove = () => {
    setIsTyping(false)
  };

  const handleInputChange = e => {
    setIsTyping(true);
    console.log(e.target.textContent);
    setNote(e.target.textContent);
  };

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

      <main className={bgStyles.join(' ')} onMouseMove={handleMouseMove}>
        <div className={maskStyles.join(' ')}>

          <div className={styles.row}>
            <textarea 
              className={textStyles.join(' ')} 
              ref={textInput} 
              id="input-text"
              onChange={handleInputChange}
              //value={note ? note : 'test'}
            ></textarea>

            <div className={menuStyles.join(' ')}>
              <MenuRow mode={mode} item={items[I_BG]} options={items[I_BG].options} />
              <MenuRow mode={mode} item={items[I_MUSIC]} options={items[I_MUSIC].options} />
              <MenuRow mode={mode} item={items[I_SIZE]} options={items[I_SIZE].options} />
              <MenuRow mode={mode} item={items[I_FONT]} options={items[I_FONT].options} />
              <MenuRow mode={mode} item={items[I_SAVE]} options={items[I_SAVE].options} />
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
