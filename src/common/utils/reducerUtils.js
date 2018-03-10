export const createReducer = (initialState, fnMap) => (
  (state = initialState, { type, payload }) => {
    const handler = fnMap[type]
    return handler ? handler(state, payload) : state
  }
)

export const oneLevelDeepMerge = (obj1, obj2) => {
  return {
    ...obj1,
    ...Object.keys(obj2).reduce((objFinal, key) => {
      objFinal[key] = {
        ...obj1[key],
        ...obj2[key]
      }

      return objFinal
    }, {})
  }
}
