import React from 'react'
import tags from '../mock-data/tags'
import questions from '../mock-data/questions'
import R from 'ramda'

const makeTbody = R.map(question => <tr key={question.id} ><td>{question.statement}</td></tr>)
const makeOptions = R.map((tag) => <option key={tag.id} value={tag.id}>{tag.name}</option>)

export default function TagsEditor(props) {
  const options = makeOptions(tags)

  return (
    <section>
      <select>{options}</select>
      <table>
        <thead>
        <tr>
          <th>Fråga</th>
        </tr>
        </thead>
        <tbody>{makeTbody(questions)}
        </tbody>
      </table>
    </section>
  )
}
