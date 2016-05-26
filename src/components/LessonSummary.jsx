import React from 'react'

import styles from './LessonSummary.css'

export default function LessonSummary(props){
	const {lesson} = props
	return (
		<section className={styles.lessonSummary}>
			<h1>{lesson.get('title')}</h1>
			<p>{lesson.get('description')}</p>			
		</section>
	)
}
