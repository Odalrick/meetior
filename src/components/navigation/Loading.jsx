import React from 'react'

import styles from './Loading.css'

export default function Loading(props) {
  const {waitFor} = props
  const waiting = !waitFor || (waitFor.isEmpty && waitFor.isEmpty())

  return (
    <div className={styles.loading}>
      {waiting ?
        <div className={styles.overlay}>
          <marquee style={{height: 100}} behavior="alternate">Loading...</marquee>
        </div> : null }
      {props.children}
    </div>
  )
}
