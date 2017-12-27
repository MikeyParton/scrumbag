export const removeFromList = (list, index) => {
  const result = Array.from(list)
  result.splice(index, 1)
  return result
}

export const addToList = (list, element, index) => {
  const result = Array.from(list)
  result.splice(index, 0, element)
  return result
}
