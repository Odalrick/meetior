import React from 'react'

import styles from './Card.css'

export default function Card(props){	
	return (
		<section className={styles.card}>
			{props.children}
		</section>
	)
}
