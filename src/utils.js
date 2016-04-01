export const error = (action, message) => ({
  type: action.type,
  error: true,
  payload: Object.assign({}, action.payload, errorPayload(message))
})

export const errorPayload = (message) => ({
  message,
})
