import { schema } from 'normalizr'
import { cardSchema } from 'features/Cards/cardsSchema'
export const userSchema = new schema.Entity('users')
export const labelSchema = new schema.Entity('labels')
export const listSchema = new schema.Entity('lists', { cards: [cardSchema] })
export const boardSchema = new schema.Entity('board', { lists: [listSchema], users: [userSchema], labels: [labelSchema] })

export const boardDetailSchema = { board: boardSchema }
export const singleListSchema = { list: listSchema }
