import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Main.module.css'

export default function MenuRow(props) {
  const [options, setOptions] = useState(props.options);
  const rowClass = `menu__row--${props.mode}`
  const rowStyles = [
    styles['menu__row'],
    styles[rowClass],
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

  const titleClick = () => {
    //if (props.item.handleClick) props.item.handleClick() // not currently implemented
    const newSelection = (props.item.id === props.selectedItem) ? null : props.item.id;
    props.setSelectedItem(newSelection);
  };

  const updateSelected = (id, callback) => {
    const newOptions = options.map(option => {
      option.selected = (id == option.id);

      return option;
    });
    setOptions(newOptions);
    if (callback) callback();
  };

  return (
    <div className={rowStyles.join(' ')}>
      <button 
        className={itemStyles.join(' ')}
        title={props.item.hoverTitle}
        onClick={titleClick}
      >{props.item.title}</button>
      { (props.item.id === props.selectedItem) && options && options.map((option, index) => {
        const optionStyles = [ ...optionDefaultStyles ];
        if (option.selected) optionStyles.push(styles[selectedClass]) 

        return (
          <button key={index} 
            className={optionStyles.join(' ')} 
            title={option.hoverTitle}
            onClick={() => updateSelected(option.id, option.handleClick)}
          >
            {option.title}
          </button>
        );
      }) }
    </div>
  );
}

