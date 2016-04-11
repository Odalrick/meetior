import React from 'react'
import WYSIWYG from './WYSIWYG'

//<textarea value={slide.get('content')}></textarea>
//<button onChange={handleChange} onClick={() => editSlideContent('asd')}>Spara</button>

export default function(props){
  const slide = props.slide
  const editSlideContent = props.editSlideContent
  const handleChange = (event) => {
    this.setState({value: event.target.value}) // Why do this?
  }
  return (

      <WYSIWYG content={slide.get('content')}></WYSIWYG>

  )
}

