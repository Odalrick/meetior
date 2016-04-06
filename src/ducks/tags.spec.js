import chai, {expect,} from 'chai'
import Immutable from 'immutable'
import chaiImmutable from 'chai-immutable'
import reducer, {addTag,} from './tags'

chai.use(chaiImmutable)

describe('tags duck', ()=> {
  it('should create initial state', () => {
    const newState = reducer(undefined, {type: 'unknown',})
    expect(newState).equal(Immutable.Map())
  })

  it('should add a new tag', () => {
    const name = 'aNewTag'
    const newState = reducer(Immutable.Map(), addTag(name))
    const id = `tags/${name}`
    expect(newState).equal(
      Immutable.fromJS({[id]: {id, name}}))
  })

})