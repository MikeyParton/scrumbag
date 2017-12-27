export const createReducer = (initialState, fnMap) => (
  (state = initialState, { type, payload }) => {
    const handler = fnMap[type]
    return handler ? handler(state, payload) : state
  }
)
