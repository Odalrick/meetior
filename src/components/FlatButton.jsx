import React from 'react'

import styles from './FlatButton.css'

export default function FlatButton(props) {
  return (
    <button className={styles.flatButton} {...props} >{props.children}</button>
  )
}
