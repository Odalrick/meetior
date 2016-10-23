import R from 'ramda'

const PREFIX = 'planck/common'
export const SET_FIELD = `${PREFIX}/SET_FIELD`
export const SET_FIELD_IN = `${PREFIX}/SET_FIELD_IN`
export const SET_ATTACHMENT = `${PREFIX}/SET_ATTACHMENT`
export const SET_ATTACHMENT_IN = `${PREFIX}/SET_ATTACHMENT_IN`
export const LOGIN = `${PREFIX}/LOGIN`

export const setField = R.curry((_id, field, value) => ({
  type: SET_FIELD, payload: { field, value, _id },
}))
export const setFieldIn = R.curry((_id, path, value) => ({
  type: SET_FIELD_IN, payload: { path, value, _id },
}))

export const setAttachment = R.curry((_id, field, file) => ({
  type: SET_ATTACHMENT, payload: { field, file, _id },
}))
export const setAttachmentIn = R.curry((_id, path, file) => ({
  type: SET_ATTACHMENT_IN, payload: { path, file, _id },
}))

export const login = R.curry((url, name, pass, forward) => ({
  type: LOGIN, payload: { url, name, pass, forward },
}))

export const setFieldDispatch = R.curry((dispatch, _id, field, value) => dispatch(setField(_id, field, value)))
export const setFieldInDispatch = R.curry((dispatch, _id, path, value) => dispatch(setFieldIn(_id, path, value)))
export const setAttachmentDispatch = R.curry((dispatch, _id, field, file) => dispatch(setAttachment(_id, field, file)))
export const setAttachmentInDispatch = R.curry((dispatch, _id, path, file) => dispatch(setAttachmentIn(_id, path, file)))
export const loginDispatch = R.curry((dispatch, url, name, pass, forward) => dispatch(login(url, name, pass, forward)))
