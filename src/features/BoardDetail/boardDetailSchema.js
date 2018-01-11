import { schema } from 'normalizr'

export const cardSchema = new schema.Entity('cards')
export const listSchema = new schema.Entity('lists', { cards: [cardSchema] })
export const boardSchema = { lists: [listSchema] }
