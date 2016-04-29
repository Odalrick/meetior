import chai, {expect,} from 'chai'
import Immutable from 'immutable'
import chaiImmutable from 'chai-immutable'
import reducer, {addTag,} from './tags'

chai.use(chaiImmutable)

describe('tags duck', ()=> {
  it('should create initial state', () => {
    const newState = reducer(undefined, {type: 'unknown',})
    expect(newState).equal(Immutable.fromJS(
		{tags: [], tagFilter: '', filteredTags: []}))
  })

  it.skip('should add a new tag', () => {
    const name = 'aNewTag'
    const newState = reducer(Immutable.List(), addTag(name))
    const id = `tags/${name}`
    expect(newState).equal(
      Immutable.fromJS([{id, name}]))
  })

})
