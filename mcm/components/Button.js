import * as React from 'react'

import styles from "../styles/Home.module.css";


const generateClassName = props => {
  const importance =
    (props.secondary && 'Secondary') ||
    (props.primary && 'Primary') ||
    'Primary'
  const variant = (props.outline && 'Outline') || (props.ghost && 'Ghost') || ''

  return `${importance}${variant}Button`
}

export default props => {
  return (
    <button style={{  background: 'lightgrey',
    opacity: '.2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    padding: '30px 80px ',
    color: 'var(--copartBlue)',
    border: '1px solid var(--copartBlue)',
marginLeft :'45%',
    outline: 'none',
    texttransform: 'uppercase',
    fontweight: 600,
    transition: 'background 0.05s',
    cursor: 'pointer',
    display: 'block',
    maxwidth: '150px',
  }}
      className={generateClassName(props)}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}
