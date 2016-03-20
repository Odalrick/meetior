import {put} from 'redux-saga/effects'
import {sagas, actionCreators} from './addTagSaga'
import {addTag as addTagDuck} from '../ducks/tags'

describe('add tag saga', ()=> {
  it('should yield ADD_TAG effect', ()=> {
    const s = sagas.addTagSaga(actionCreators.addTag('test'))
    const effect = s.next().value
    expect(effect).to.deep.equal(put(addTagDuck('test')))
  })

  it('should reject duplicate tags')
})
