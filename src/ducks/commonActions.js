import R from 'ramda'

export const SET_FIELD = 'plank/common/SET_FIELD'

export const setField = R.curry((_id, field, value) => ({
  type: SET_FIELD, payload: { field, value, _id },
}))
export const setFieldDispatch = R.curry((dispatch, _id, field, value) => dispatch(setField(_id, field, value)))
