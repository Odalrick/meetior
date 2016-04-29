import Immutable from 'immutable'
import {put, select} from 'redux-saga/effects'
import {sagas, actionCreators} from './addTagSaga'
import {addTag} from '../ducks/tags'
import {error} from '../utils'
import {tagsSelector} from '../selectors'

describe.skip('add tag saga', () => {
  it('should yield ADD_TAG effect', () => {
    const s = sagas.addTagSaga(actionCreators.addTag('test'))
    s.next(Immutable.Map())
    const effect = s.next().value
    expect(effect).to.deep.equal(put(addTag('test')))
  })

  it('should reject duplicate tags', () => {
    const action = actionCreators.addTag('test')
    const s = sagas.addTagSaga(action)
    const effect = s.next().value

    expect(effect).to.deep.equal(select(tagsSelector))

    const effect2 = s.next(Immutable.fromJS({
      'tags/test': {
        name: 'test', id: 'tags/test', questions: ["question/2"],
      },
    })).value

    expect(effect2).to.deep.equal(put(
      error(addTag('test'),'Det finns redan en tagg med detta namn')
    ))
  })
})
