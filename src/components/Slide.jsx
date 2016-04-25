import React from 'react'
import style from './Slide.css'

export default function(props){
  const {text} = props
  return (
    <div {...props} className={style.slide}
         dangerouslySetInnerHTML={{__html:text}}>
    </div>
  )
}
