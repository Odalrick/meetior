import React from 'react'

export default function(props){
  const slide = props.slide
  const editSlideContent = props.editSlideContent
  const handleChange = (event) => {
    this.setState({value: event.target.value}) // Why do this?
  }
  return (
    <div>
      <textarea value={slide.get('content')}></textarea>
      <button onChange={handleChange} onClick={() => editSlideContent('asd')}>Spara</button>
    </div>
  )
}

