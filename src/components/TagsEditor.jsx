import React from 'react'
import Immutable from 'immutable'
import TagList from './TagList.jsx'

import questions from '../mock-data/questions'
import R from 'ramda'

const makeTbody = R.map(question => <tr key={question.id} ><td>{question.statement}</td></tr>)

export default function TagsEditor(props) {
  const tags = props.tags.toList()
  return (
    <section>
      <TagList tags={tags}/>
      <table className="table table-hover">
        <thead>
        <tr>
          <th>Fråga</th>
        </tr>
        </thead>
        <tbody>{makeTbody(questions)}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={()=>props.addTag('asd')}>+ Skapa ny tagg</button>
    </section>
  )
}
