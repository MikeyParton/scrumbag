const getAllLists = ({ list }) => (
  list.allIds.map(id => list.byId[id])
)

export default {
  getAllLists
}
