import React from 'react'

import styles from '../stylesheets/card.css'

export default function LessonCard(props){
	const {lesson} = props
	return (
		<section className={styles.card}>
			<h1>{lesson.get('title')}</h1>
			<span>A lesson!!!</span>
			<div>

			</div>
		</section>
	)
}
