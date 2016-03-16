import {put} from 'redux-saga'
import saga from './addTagSaga'
import duck from '../ducks/tags'

describe('add tag saga', ()=> {

  it('should yield ADD_TAG effect', ()=> {
    const saga = saga()
    const effect = saga.next(duck.addTag('test')  ).value
    expect(effect).to.deepEqual(put(duck.addTag('test')))
  })

})
