import React from 'react'
import SlidePanel from './SlidePanel'

export default (props) => {
	const {addSlide} = props
	return (
		<div>
			<SlidePanel
				{...props}
			/>

		</div>
	)
}
