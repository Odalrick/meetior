import React from 'react'

export default function LessonCard(props){
	const {lesson} = props
	return (
		<section>
			<h1>{lesson.get('title')}</h1>							
			<span>A lesson!!!</span>
			<div>
				
			</div>
		</section>
	)
}