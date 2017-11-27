const getAllLists = ({ list }) => {
  return list.allIds.map(id => list.byId[id])
}

export default {
  getAllLists
}
