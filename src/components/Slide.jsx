import React from 'react'
import style from './Slide.css'
import LayoutSelector from './layout/LayoutSelector.jsx'

export default function(props){
  const {slide} = props
  return (
    <div {...props} className={style.slide}
         dangerouslySetInnerHTML={{__html:text}}>
    </div>
  )
}
