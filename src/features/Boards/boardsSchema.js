import { schema } from 'normalizr'

const board = new schema.Entity('boards')
const boardsSchema = { boards: [board] }

export default boardsSchema
