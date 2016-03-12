import React from 'react'
import TagList from './TagList.jsx'
import tags from '../mock-data/tags'
import questions from '../mock-data/questions'
import R from 'ramda'

const makeTbody = R.map(question => <tr key={question.id} ><td>{question.statement}</td></tr>)

export default function TagsEditor(props) {
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
      <button className="btn btn-primary">+ Skapa ny tagg</button>
    </section>
  )
}
