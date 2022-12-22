import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Main.module.css'

export default function MenuRow(props) {
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
    styles[itemClass],
    styles['menu__option'],
    styles[optionClass],
  ];
  const selectedClass = `menu__option--selected-${props.mode}`

  const updateSelected = (id, callback) => {
    //console.log('updating selected[' + id + ']');
    // loop through options and change selected for ID?
    const newOptions = options.map(option => {
      option.selected = (id == option.id);

      return option;
    });
    setOptions(newOptions);
    if (callback) {
      //console.log('executing handleClick');
      callback();
    }
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

