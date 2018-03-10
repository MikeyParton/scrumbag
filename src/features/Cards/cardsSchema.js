import { schema } from 'normalizr'

export const usersSchema = new schema.Entity('users')
export const checklistItemSchema = new schema.Entity('checklistItems')
export const checklistSchema = new schema.Entity('checklists', { checklistItems: [checklistItemSchema] })
export const cardSchema = new schema.Entity('cards', {
  checklists: [checklistSchema],
  users: [usersSchema]
})

export const singleChecklistSchema = { checklist: checklistSchema }

export const cardsSchema = { cards: [cardSchema] }
export const checklistItemsListSchema = { checklistItems: [checklistItemSchema] }
