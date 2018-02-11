import { schema } from 'normalizr'

export const cardSchema = new schema.Entity('cards')
export const listSchema = new schema.Entity('lists', { cards: [cardSchema] })
export const boardSchema = new schema.Entity('board', { lists: [listSchema] })

export const boardDetailSchema = { board: boardSchema }
