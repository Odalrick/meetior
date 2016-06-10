import R from 'ramda'

export const SET_FIELD = 'plank/common/SET_FIELD'
export const SET_FIELD_IN = 'plank/common/SET_FIELD_IN'
export const SET_ATTACHMENT = 'plank/common/SET_ATTACHMENT'

export const setField = R.curry((_id, field, value) => ({
  type: SET_FIELD, payload: { field, value, _id },
}))

export const setFieldIn = R.curry((_id, path, value) => ({
  type: SET_FIELD_IN, payload: { path, value, _id },
}))

export const setAttachment = R.curry((_id, field, file) => ({
  type: SET_ATTACHMENT, payload: { field, file, _id },
}))

export const setFieldDispatch = R.curry((dispatch, _id, field, value) => dispatch(setField(_id, field, value)))
export const setFieldInDispatch = R.curry((dispatch, _id, path, value) => dispatch(setField(_id, path, value)))
export const setAttachmentDispatch = R.curry((dispatch, _id, field, file) => dispatch(setAttachment(_id, field, file)))
