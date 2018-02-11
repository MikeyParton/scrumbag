import { schema } from 'normalizr'

export const checklistItemSchema = new schema.Entity('checklistItems')
export const checklistSchema = new schema.Entity('checklists', { checklistItems: [checklistItemSchema] })
export const cardSchema = new schema.Entity('card', { checklists: [checklistSchema] })

export const singleCardSchema = { card: cardSchema }
