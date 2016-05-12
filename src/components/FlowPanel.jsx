import React from 'react'
import PanelItem from './PanelItem'
import styles from './FlowPanel.css'

export default function FlowPanel(props) {
  return (
    <div className={styles.flowPanel}>
      {
        props.children
          .map((c, i) =>
            <PanelItem key={i} index={i} canMove={props.canMove} moveItem={props.moveItem}>{c}</PanelItem>)
      }
    </div>
  )
}
