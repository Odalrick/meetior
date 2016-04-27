import React from 'react'
import SlideList from './SlideList'

export default (props) => {
	const {addSlide} = props
	return (
		<div>
			<SlideList 
				{...props}
			/>
			<button onClick={addSlide}>ADD SLIDE</button>
		</div>
	)
}