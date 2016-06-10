import R from 'ramda'
import I from 'immutable'
import { put, call, select } from 'redux-saga/effects'
import sagaFactory from './uploadAttachmentSaga'
import { loadedDocument, setPending } from '../../ducks/docs'
import { setAttachment, setField } from '../../ducks/commonActions'

describe('upload attachment saga', function () {
  const db = {
    uploadAttachment: () => {
    },
  }
  const documentGetter = () => {
  }

  const testSaga = sagaFactory(db, documentGetter)
  const cont = R.assoc('value', R.__, { done: false })

  it('should upload an attachment', () => {
    const _id = '123'
    const file = {}
    const field = 'icon'
    const url = 'http://somewhere/image.png'

    const document = {
      _id,
      _rev: 'alpha',
      title: 'Test lesson',
      type: 'lesson',
      icon: null,
      draft: {
        _id,
        title: 'Committed lesson',
        type: 'lesson',
      },
    }

    const action = setAttachment(_id, field, file)
    const sagaInstance = testSaga.uploadAttachment(action)
    expect(sagaInstance.next()).to.deep.equal(cont(put(setPending({ _id }))))
    expect(sagaInstance.next()).to.deep.equal(cont(select(documentGetter, _id)))
    expect(sagaInstance.next(I.fromJS(document))).to.deep.equal(cont(call(db.uploadAttachment, document, file)))
    expect(sagaInstance.next(url)).to.deep.equal(cont(put(setField(_id, field, url))))
    expect(sagaInstance.next().done).to.be.true()
  })
})
